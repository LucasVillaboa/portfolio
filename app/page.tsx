import Hero from "@/app/components/Hero";
import Timeline from "@/app/components/Timeline";
import Contact from "@/app/components/Contact";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />

      <Timeline />

      {/* ---------- SKILLS ---------- */}
      <section
        id="skills"
        className="max-w-5xl mx-auto py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Tecnologías</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg">Laravel</div>
          <div className="bg-gray-800 p-4 rounded-lg">PHP</div>
          <div className="bg-gray-800 p-4 rounded-lg">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg">Next.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">TypeScript</div>
          <div className="bg-gray-800 p-4 rounded-lg">MySQL</div>
          <div className="bg-gray-800 p-4 rounded-lg">Bootstrap</div>
          <div className="bg-gray-800 p-4 rounded-lg">Tailwind</div>
        </div>
      </section>

      {/* ---------- PROYECTOS ---------- */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Proyectos destacados
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ---------- CONTACTO ---------- */}
      <Contact />

    </main>
  );
}



