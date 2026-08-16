import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh w-full px-6 sm:px-10 lg:px-16 py-10">
      <Link
        href="/"
        className="font-serif text-lg hover:text-catpuccinRed transition-colors duration-200"
      >
        ← Back
      </Link>

      <h1 className="font-serif text-4xl sm:text-5xl mt-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
