import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Window } from "@/components/Window";
import { projectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug.get(slug as (typeof projects)[number]["slug"]);

  if (!project) {
    return { title: "Not Found | Ichito Portfolio" };
  }

  return {
    title: `${project.title} | Ichito Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug.get(slug as (typeof projects)[number]["slug"]);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <Window>
        {project.mainImagePath ? (
          <div className="relative mb-6 w-full overflow-hidden rounded border border-white/50 aspect-video">
            <Image
              src={project.mainImagePath}
              alt={`${project.title} image`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : null}
        <h1 className="text-2xl md:text-3xl">{project.title}</h1>
        {project.dateLabel ? <p className="mt-2 text-xs text-white/80">{project.dateLabel}</p> : null}
        {project.githubUrl ? (
          <p className="mt-2 text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
          </p>
        ) : null}
        {project.pdfLinks && project.pdfLinks.length > 0 ? (
          <div className="mt-2 text-xs">
            <p>PDF資料</p>
            <ul className="mt-1 space-y-1">
              {project.pdfLinks.map((pdf) => (
                <li key={pdf.href}>
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    {pdf.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <p className="mt-4 text-sm leading-relaxed md:text-base">{project.description}</p>
        <section className="mt-6 space-y-4">
          {project.contentBlocks.map((block, index) =>
            block.type === "text" ? (
              <p key={`text-${index}`} className="text-sm leading-relaxed md:text-base">
                {block.text}
              </p>
            ) : (
              <figure key={`image-${index}`} className="space-y-2">
                <div className="relative w-full overflow-hidden rounded border border-white/40 aspect-video">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="text-xs text-white/80">{block.caption}</figcaption>
                ) : null}
              </figure>
            ),
          )}
        </section>

        <section className="mt-6 border-t border-white/40 pt-4">
          <h2 className="text-base md:text-lg">Tech Stack</h2>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            {project.techStack.map((tech) => (
              <li key={tech} className="rounded border border-white/40 px-2 py-1">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8">
          <Link href="/" className="underline underline-offset-4">
            {"\u623B\u308B\uFF08/\uFF09"}
          </Link>
        </div>
      </Window>
    </main>
  );
}
