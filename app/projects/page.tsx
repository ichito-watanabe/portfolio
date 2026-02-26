import Link from "next/link";

import { Window } from "@/components/Window";
import { projectsByDateDesc } from "@/lib/projects";

export default function ProjectsIndexPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <Window className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl">Projects</h1>
        <ul className="mt-6 space-y-2">
          {projectsByDateDesc.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="underline underline-offset-4">
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/" className="underline underline-offset-4">
            {"\u623B\u308B\uFF08/\uFF09"}
          </Link>
        </div>
      </Window>
    </main>
  );
}
