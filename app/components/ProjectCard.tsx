import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/experiences/${project.slug}`}>
      <article className="group cursor-pointer">

        {/* Imagen */}
        <div className="h-[260px] flex items-center justify-center">
          <div className="w-full">
            <div className="bg-neutral-900 rounded-t-xl p-[6px]">
              <div className="bg-black rounded-md overflow-hidden aspect-[16/10] border border-neutral-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={520}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="h-[5px] bg-gradient-to-r from-neutral-600 via-neutral-400 to-neutral-600 rounded-b-xl" />
          </div>
        </div>

        {/* Información */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </article>
    </Link>
  );
}







