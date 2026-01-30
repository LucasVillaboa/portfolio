import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative min-h-screen text-slate-900">
        
        {/* Fondo delicado global */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]" />

        <Navbar />

        {/* espacio para que el contenido no quede debajo del navbar */}
        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}




