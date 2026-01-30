"use client";

import { Mail, Copy, Send, Linkedin, Github } from "lucide-react";

const email = "lucas.villaboa@gmail.com"; 

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-32 px-6 text-center">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold mb-10">Contacto</h2>

        {/* ICONOS REDES */}
        <div className="flex justify-center gap-10 mb-16">
          <a
            href="https://www.linkedin.com/in/lucas-villaboa-0a683034b/"
            target="_blank"
            className="p-4 rounded-full border hover:bg-black hover:text-white transition"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="https://github.com/LucasVillaboa"
            target="_blank"
            className="p-4 rounded-full border hover:bg-black hover:text-white transition"
          >
            <Github size={28} />
          </a>
        </div>

        {/* MAIL + ACCIONES */}
        <div className="flex justify-center items-center gap-4 text-lg font-medium text-gray-800">

          {/* MAIL */}
          <span className="border px-6 py-3 rounded-lg bg-white shadow-sm">
            {email}
          </span>

          {/* COPIAR */}
          <button
            onClick={() => navigator.clipboard.writeText(email)}
            title="Copiar email"
            className="p-3 border rounded-lg hover:bg-black hover:text-white transition"
          >
            <Copy size={20} />
          </button>

          {/* ENVIAR MAIL */}
          <a
            href={`mailto:${email}`}
            title="Enviar correo"
            className="p-3 border rounded-lg hover:bg-black hover:text-white transition"
          >
            <Send size={20} />
          </a>

        </div>

      </div>
    </section>
  );
}



