import Link from "next/link";
import { projects } from "@/data/projects";

export default function ExperiencesPage() {
  return (
    <main className="p-8 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Experiencias</h1>

      <ul className="space-y-2">
        {projects.map(project => (
          <li key={project.slug}>
            <Link
              href={`/experiences/${project.slug}`} // 👈 aquí apunta al slug correcto
              className="text-blue-600 underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}






