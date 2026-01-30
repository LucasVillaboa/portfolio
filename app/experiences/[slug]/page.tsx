import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  const images = project.images && project.images.length > 0
    ? project.images
    : [
        `/projects/${slug}/cover.png`,
        `/projects/${slug}/login.png`,
        `/projects/${slug}/dashboard.png`,
        `/projects/${slug}/beneficiarios.png`,
        `/projects/${slug}/entregas.png`,
      ];

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-12">
        {project.title}
      </h1>

      {/* GRID DE CELULARES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {images.map((src, i) => (
          <div key={i} className="flex justify-center">
            <div className="relative w-[260px] bg-black rounded-[2.5rem] p-3 shadow-2xl border border-neutral-700">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-10" />

              <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                <Image
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- DESCRIPCIÓN ---------- */}
      <section className="max-w-3xl">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
          {project.longDescription}
        </p>

        {/* ---------- LINKS ---------- */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-90"
            >
              Ver demo
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-black hover:bg-gray-100"
            >
              Ver código
            </a>
          )}
        </div>
      </section>
    </main>
  );
}


















