"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    //<nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center">

      <ul className="flex gap-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-16 py-4 text-slate-700 font-medium">
        <li><Link href="/#hero">Inicio</Link></li>
        <li><Link href="/#about">Sobre mí</Link></li>
        <li><Link href="/#projects">Proyectos</Link></li>
        <li><Link href="/#contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}




