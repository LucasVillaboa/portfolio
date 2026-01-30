"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
    className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden"

    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:24px_24px]"
        animate={{ backgroundPositionY: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hola, soy <span className="text-blue-600">Lucas Villaboa</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-xl">
            Desarrollador Fullstack especializado en Laravel y PHP.
            Actualmente incorporando Next.js y TypeScript para frontend moderno.
          </p>

          <div className="flex gap-5">
            <Link
              href="#projects"
              className="px-6 py-3 bg-slate-900 text-white rounded-xl shadow hover:shadow-xl transition"
            >
              Ver proyectos
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-slate-900 rounded-xl hover:bg-slate-100 transition"
            >
              Contacto
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-fuchsia-500 rounded-3xl shadow-2xl flex items-center justify-center text-white text-2xl font-semibold animate-float-slower">
            Tu foto
          </div>
        </motion.div>
      </div>
    </section>
  );
}
