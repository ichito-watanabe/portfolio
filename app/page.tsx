import { CommandMenu } from "@/components/CommandMenu";
import { Typewriter } from "@/components/Typewriter";
import { Window } from "@/components/Window";
import { projects } from "@/lib/projects";

const introText = "Welcome to Ichito Portfolio";

export default function Home() {
  const menuItems = projects.map((project) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
  }));

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <Window>
        <Typewriter text={introText} speedMs={65} className="text-2xl md:text-3xl" />
        <p className="mt-4 text-sm md:text-base">
          Select a command to view each experience.
        </p>
        <div className="mt-8 border-t border-white/40 pt-4">
          <p className="mb-2 text-sm">Choose your command</p>
          <CommandMenu items={menuItems} />
        </div>
      </Window>
    </main>
  );
}
