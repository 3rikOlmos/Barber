// Página de Ubicación
// Información de localización y mapa

import SquircleCard from '../components/ui/SquircleCard'
import Button from '../components/ui/Button'

export default function Location() {
  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-2">
          Nuestra Ubicación
        </h2>
        <p className="text-gray-600">
          Visítanos en nuestro local
        </p>
      </div>

      {/* Contenido */}
      <div className="px-4 max-w-4xl mx-auto space-y-6 mb-8">
        {/* Dirección */}
        <SquircleCard>
          <div className="flex gap-4">
            <div className="text-4xl">📍</div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Dirección</h3>
              <p className="text-gray-600">
                Calle Principal 123
                <br />
                Centro, Ciudad
                <br />
                CP: 12345
              </p>
            </div>
          </div>
        </SquircleCard>

        {/* Teléfono */}
        <SquircleCard>
          <div className="flex gap-4">
            <div className="text-4xl">📞</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-2">Teléfono</h3>
              <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                Llamar Ahora
              </Button>
            </div>
          </div>
        </SquircleCard>

        {/* Email */}
        <SquircleCard>
          <div className="flex gap-4">
            <div className="text-4xl">📧</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-2">Email</h3>
              <p className="text-gray-600 mb-4">contacto@barberia.com</p>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => window.location.href = 'mailto:contacto@barberia.com'}
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </SquircleCard>

        {/* Horario */}
        <SquircleCard>
          <h3 className="text-lg font-bold text-black mb-4">Horario de Atención</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Lunes - Viernes:</span>
              <span className="font-medium text-black">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sábado:</span>
              <span className="font-medium text-black">9:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Domingo:</span>
              <span className="font-medium text-black">Cerrado</span>
            </div>
          </div>
        </SquircleCard>

        {/* Mapa (placeholder) */}
        <div className="rounded-3xl overflow-hidden shadow-md bg-gray-200 h-64 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700 mb-3">
              🗺️ Mapa Interactivo
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open('https://maps.google.com/?q=Calle+Principal+123')}
            >
              Ver en Google Maps
            </Button>
          </div>
        </div>

        {/* Redes Sociales */}
        <SquircleCard>
          <h3 className="text-lg font-bold text-black mb-4">Síguenos</h3>
          <div className="flex gap-3 flex-wrap">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open('https://instagram.com')}
            >
              📷 Instagram
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open('https://facebook.com')}
            >
              👥 Facebook
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open('https://tiktok.com')}
            >
              🎵 TikTok
            </Button>
          </div>
        </SquircleCard>
      </div>
    </div>
  )
}
