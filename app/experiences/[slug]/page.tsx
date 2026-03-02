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

       {project.codeUrl && (
  <a
    href={project.codeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
  >
    Ver código
  </a>
)}
      </section>

    </main>
  );
}

















