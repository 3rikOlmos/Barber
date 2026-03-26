// Página de Portafolio - Galería de trabajos
// Estructura: Grid tipo Instagram con imágenes

import SquircleCard from '../components/ui/SquircleCard'

export default function Portfolio() {
  // Datos hardcodeados de ejemplos de trabajos
  const works = [
    { id: 1, title: 'Fade Clásico', emoji: '✂️', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Barba Afilada', emoji: '🧔', color: 'from-purple-400 to-purple-600' },
    { id: 3, title: 'Corte Moderno', emoji: '💇', color: 'from-pink-400 to-pink-600' },
    { id: 4, title: 'Diseño Personalizado', emoji: '🎨', color: 'from-green-400 to-green-600' },
    { id: 5, title: 'Líneas Precisas', emoji: '📐', color: 'from-yellow-400 to-yellow-600' },
    { id: 6, title: 'Estilo Vintage', emoji: '🕰️', color: 'from-red-400 to-red-600' },
  ]

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-2">
          Nuestros Trabajos
        </h2>
        <p className="text-gray-600">
          Galería de cortes y diseños realizados por nuestro equipo
        </p>
      </div>

      {/* Galería Grid */}
      <div className="px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {works.map(work => (
            <SquircleCard key={work.id} className="aspect-square flex items-center justify-center">
              <div className={`
                w-full h-full flex flex-col items-center justify-center gap-3
                bg-gradient-to-br ${work.color}
                rounded-3xl text-white p-4 text-center
              `}>
                <div className="text-5xl">{work.emoji}</div>
                <h3 className="font-bold text-sm leading-tight">
                  {work.title}
                </h3>
              </div>
            </SquircleCard>
          ))}
        </div>

        {/* Section adicional: Estadísticas */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">
            Nuestras Cifras
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <SquircleCard className="text-center">
              <div className="text-3xl font-bold text-black">500+</div>
              <p className="text-gray-600 text-sm">Clientes atendidos</p>
            </SquircleCard>

            <SquircleCard className="text-center">
              <div className="text-3xl font-bold text-black">8+</div>
              <p className="text-gray-600 text-sm">Años de experiencia</p>
            </SquircleCard>

            <SquircleCard className="text-center">
              <div className="text-3xl font-bold text-black">4.8⭐</div>
              <p className="text-gray-600 text-sm">Calificación</p>
            </SquircleCard>
          </div>
        </div>
      </div>
    </div>
  )
}
