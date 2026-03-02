"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
       <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight">
  Lucas Villaboa
</h1>

<h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
  Fullstack Developer
</h2>

<p className="text-lg text-gray-600 mb-8 max-w-xl">
  Desarrollador Fullstack especializado en PHP y Laravel.
  Experiencia en Next.js y TypeScript para desarrollo frontend.
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/profile.jpg"
              alt="Lucas Villaboa"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}