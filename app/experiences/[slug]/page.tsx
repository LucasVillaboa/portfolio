import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      {/* Título */}
      <h1 className="text-3xl font-bold mb-10">
        {project.title}
      </h1>

      {/* IMAGEN ÚNICA */}
      <div className="relative w-full h-[500px] mb-16 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Descripción */}
      <section className="max-w-3xl">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
          {project.longDescription}
        </p>

        {/* Botón código */}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Ver código
        </a>
      </section>

    </main>
  );
}

















