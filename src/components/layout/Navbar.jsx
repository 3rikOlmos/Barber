// Navbar con efecto Glassmorphism
// Clases clave: backdrop-blur-md, bg-white/70, shadow suave

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full">
      <div className="backdrop-blur-md bg-white/70 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">💈</div>
            <h1 className="text-xl font-bold text-black">Barbería & Estética</h1>
          </div>

          {/* Placeholder para menú desktop (no necesario en MVP mobile-first) */}
          <div className="hidden md:flex gap-4"></div>
        </div>
      </div>
    </nav>
  )
}
