import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-12">
        {project.title}
      </h1>

      {project.device === "mobile" ? (
        <div className="flex justify-center mb-16">
          <div className="relative w-[260px] bg-black rounded-[2.5rem] p-3 shadow-2xl border border-neutral-700">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-10" />

            <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full aspect-video mb-16 rounded-xl overflow-hidden shadow-xl bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      <section className="max-w-3xl">

        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
          {project.longDescription}
        </p>

        {/* ENLACES */}
        <div className="flex flex-wrap gap-4">

          {project.slug === "reservas-multirubro" && (
            <>
              <a
                href="https://med-turnos.vercel.app/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                🩺 Consultorio Médico
              </a>

              <a
                href="https://med-turnos.vercel.app/lavadero"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                🚗 Lavadero
              </a>

              <a
                href="https://med-turnos.vercel.app/futbol5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                ⚽ Fútbol 5
              </a>
            </>
          )}

          {project.slug === "mapa-merenderos" && project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              🗺️ Ver aplicación
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Ver código
            </a>
          )}

        </div>

      </section>

    </main>
  );
}
















