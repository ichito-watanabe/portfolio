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
        <div className="relative mb-6 w-full overflow-hidden rounded border border-white/50 aspect-video">
          <Image
            src={project.imagePath}
            alt={`${project.title} image`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl md:text-3xl">{project.title}</h1>
        <p className="mt-4 text-sm leading-relaxed md:text-base">{project.description}</p>

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
