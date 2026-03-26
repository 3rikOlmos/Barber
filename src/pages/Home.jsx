// Home / Landing page del cliente
// Estructura: Hero section + Promociones + CTA

import { useState } from 'react'
import SquircleCard from '../components/ui/SquircleCard'
import Button from '../components/ui/Button'

export default function Home({ onNavigate = () => {} }) {
  const [promotionIndex, setPromotionIndex] = useState(0)

  const promotions = [
    {
      id: 1,
      title: 'Cera + Corte Básico',
      description: 'Fijador de cabello premium + Fade Clásico',
      price: '$38',
      emoji: '💆',
    },
    {
      id: 2,
      title: 'Spray + Loción Capilar',
      description: 'Set completo de cuidado y styling',
      price: '$22',
      emoji: '💨',
    },
    {
      id: 3,
      title: 'Combo Premium',
      description: 'Mohicano + Barba Full Care + Productos',
      price: '$75',
      emoji: '👑',
    },
    {
      id: 4,
      title: 'Kit Mantenimiento',
      description: 'Cera + Spray + Loción (3 productos)',
      price: '$45',
      emoji: '🎁',
    },
  ]

  const handleNextPromotion = () => {
    setPromotionIndex((prev) => (prev + 1) % promotions.length)
  }

  const handlePrevPromotion = () => {
    setPromotionIndex((prev) => (prev - 1 + promotions.length) % promotions.length)
  }

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="px-4 pt-8 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">💈</div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Bienvenido a tu Barbería
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Agendamiento fácil, rápido y sin complicaciones
          </p>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => onNavigate('booking')}
          >
            Agendar Cita
          </Button>
        </div>
      </section>

      {/* Promociones Destacadas - Carrusel */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">Promociones</h3>

          {/* Carrusel */}
          <div className="relative">
            <SquircleCard>
              <div className="text-5xl mb-4">
                {promotions[promotionIndex].emoji}
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">
                {promotions[promotionIndex].title}
              </h4>
              <p className="text-gray-600 mb-6">
                {promotions[promotionIndex].description}
              </p>

              {/* Indicadores y controles */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevPromotion}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black font-medium"
                >
                  ←
                </button>

                <div className="flex gap-2">
                  {promotions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`
                        h-2 rounded-full transition-all duration-200
                        ${idx === promotionIndex ? 'w-6 bg-black' : 'w-2 bg-gray-300'}
                      `}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextPromotion}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black font-medium"
                >
                  →
                </button>
              </div>
            </SquircleCard>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">Información</h3>

          <div className="grid grid-cols-1 gap-4">
            <SquircleCard>
              <h4 className="text-lg font-bold text-black mb-2">📍 Ubicación</h4>
              <p className="text-gray-600 mb-4">
                Calle Principal 123, Centro
              </p>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => window.open('https://maps.google.com')}
              >
                Ver en Google Maps
              </Button>
            </SquircleCard>

            <SquircleCard>
              <h4 className="text-lg font-bold text-black mb-2">⏰ Horario</h4>
              <p className="text-gray-600">
                Lunes a Viernes: 9:00 - 18:00
                <br />
                Sábado: 9:00 - 14:00
                <br />
                Domingo: Cerrado
              </p>
            </SquircleCard>
          </div>
        </div>
      </section>
    </div>
  )
}
