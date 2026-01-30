"use client";
import { motion } from "framer-motion";
import { Star, Circle } from "lucide-react";

const items = [
  {
    title: "Diseño Web Responsive – HTML5 y CSS3",
    year: "2020",
    duration: "2 meses",
    link: "https://site.elearning-total.com/cursos-frre-2/",
    isFinal: false,
  },
  {
    title: "Programación Web con PHP y MySQL",
    year: "2021",
    duration: "2 meses",
    link: "https://site.elearning-total.com/cursos-frre-2/",
    isFinal: false,
  },
  {
    title: "Programación Web con PHP y MySQL",
    year: "2021",
    duration: "3 meses",
    link: "https://site.elearning-total.com/cursos-frre-2/",
    isFinal: false,
  },
  {
    title: "Tecnicatura Universitaria en Programación",
    year: "2021 – 2025",
    duration: "UTN FRRe",
    link: "https://www.frre.utn.edu.ar/tsp/paginas/view/item/Incumbencias",
    isFinal: true,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:22px_22px]"
        animate={{ backgroundPositionY: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Línea vertical */}
        <div className="absolute left-[26px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400 opacity-70" />

        <ul className="space-y-20">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex gap-10 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Nodo */}
              <div className="flex flex-col items-center">
                <div className="bg-white z-10 p-3 rounded-full shadow-md">
                  {item.isFinal ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <Star className="text-yellow-500" size={20} />
                    </motion.div>
                  ) : (
                    <Circle className="text-gray-500" size={14} />
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{item.duration}</p>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Ver más
                </a>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-24 text-center text-sm text-gray-400">
          Fin de mi recorrido académico ✦
        </div>
      </div>
    </section>
  );
}



