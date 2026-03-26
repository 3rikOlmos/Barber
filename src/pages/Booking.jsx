// Página de Agendamiento con flujo anidado (4 pasos)
// Paso 1: Selección de tipo de servicio (sin precios)
// Paso 2: Selección de subservicio específico (CON PRECIOS)
// Paso 3: Selección de Fecha y Hora
// Paso 4: Datos del Cliente y Confirmación

import { useState } from 'react'
import SquircleCard from '../components/ui/SquircleCard'
import Button from '../components/ui/Button'

export default function Booking() {
  const [step, setStep] = useState(1)
  const [selectedMainService, setSelectedMainService] = useState(null) // 'haircut', 'barber', 'combo'
  const [selectedSubService, setSelectedSubService] = useState(null) // El subservicio específico
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [clientData, setClientData] = useState({ name: '', phone: '' })

  // Servicios principales (sin precios)
  const mainServices = [
    {
      id: 'haircut',
      name: 'Solo Corte',
      description: 'Elige tu estilo de corte',
      icon: '✂️',
    },
    {
      id: 'barber',
      name: 'Solo Barbería',
      description: 'Cuidado profesional de barba',
      icon: '🧔',
    },
    {
      id: 'combo',
      name: 'Corte + Barbería',
      description: 'Combo completo de servicios',
      icon: '💇',
    },
  ]

  // Subservicios específicos (CON PRECIOS)
  const subServices = {
    haircut: [
      {
        id: 'fade_classic',
        name: 'Fade Clásico',
        description: 'Transición suave de largo a corto',
        price: '$25',
        icon: '✂️',
      },
      {
        id: 'fade_low_greca',
        name: 'Fade Low + Geca',
        description: 'Fade bajo con decoración',
        price: '$30',
        icon: '✨',
      },
      {
        id: 'mohicano',
        name: 'Mohicano',
        description: 'Estilo clásico atrevido',
        price: '$35',
        icon: '👽',
      },
    ],
    barber: [
      {
        id: 'beard_simple',
        name: 'Barba Simple',
        description: 'Afeitado y perfilado básico',
        price: '$15',
        icon: '🧔',
      },
      {
        id: 'beard_design',
        name: 'Barba con Diseño',
        description: 'Perfilado artístico y detallado',
        price: '$25',
        icon: '🎨',
      },
      {
        id: 'beard_full',
        name: 'Barba Full Care',
        description: 'Limpieza profunda + tratamiento',
        price: '$30',
        icon: '✨',
      },
    ],
    combo: [
      {
        id: 'combo_basic',
        name: 'Combo Básico',
        description: 'Fade Clásico + Barba Simple',
        price: '$35',
        icon: '💇',
      },
      {
        id: 'combo_pro',
        name: 'Combo Pro',
        description: 'Fade Low + Geca + Barba Diseño',
        price: '$50',
        icon: '👑',
      },
      {
        id: 'combo_premium',
        name: 'Combo Premium',
        description: 'Mohicano + Barba Full Care',
        price: '$60',
        icon: '💎',
      },
    ],
  }

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  ]

  const handleNext = () => {
    if (step === 1 && !selectedMainService) {
      alert('Por favor selecciona un tipo de servicio')
      return
    }
    if (step === 2 && !selectedSubService) {
      alert('Por favor selecciona un servicio específico')
      return
    }
    if (step === 3 && (!selectedDate || !selectedTime)) {
      alert('Por favor selecciona fecha y hora')
      return
    }
    if (step === 4 && (!clientData.name || !clientData.phone)) {
      alert('Por favor completa tu nombre y teléfono')
      return
    }
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleConfirm = () => {
    const selectedSub = subServices[selectedMainService]?.find(s => s.id === selectedSubService)
    alert(`Cita confirmada para ${clientData.name}\nServicio: ${selectedSub?.name}\nFecha: ${selectedDate} a las ${selectedTime}\nPrecio: ${selectedSub?.price}`)
    // Aquí iría la lógica para enviar al backend
    setStep(1)
    setSelectedMainService(null)
    setSelectedSubService(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setClientData({ name: '', phone: '' })
  }

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Progreso */}
      <div className="px-4 pt-6 pb-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold
                transition-colors duration-200
                ${s <= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}
              `}
            >
              {s}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Paso {step} de 4
        </p>
      </div>

      {/* Contenido por paso */}
      <div className="px-4 max-w-4xl mx-auto">
        {/* PASO 1: Selección de Tipo de Servicio (SIN PRECIOS) */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              ¿Qué tipo de servicio deseas?
            </h2>
            <div className="space-y-4 mb-8">
              {mainServices.map(service => (
                <SquircleCard
                  key={service.id}
                  onClick={() => {
                    setSelectedMainService(service.id)
                    setSelectedSubService(null) // Reset subservicio
                  }}
                  className={`
                    cursor-pointer border-2 transition-colors duration-200
                    ${selectedMainService === service.id ? 'border-black bg-gray-50' : 'border-transparent'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                    {selectedMainService === service.id && (
                      <div className="text-2xl">✓</div>
                    )}
                  </div>
                </SquircleCard>
              ))}
            </div>
          </div>
        )}

        {/* PASO 2: Selección de Subservicio (CON PRECIOS) */}
        {step === 2 && selectedMainService && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Elige tu opción
            </h2>
            <p className="text-gray-600 mb-6">
              {mainServices.find(s => s.id === selectedMainService)?.name}
            </p>
            <div className="space-y-4 mb-8">
              {subServices[selectedMainService]?.map(subService => (
                <SquircleCard
                  key={subService.id}
                  onClick={() => setSelectedSubService(subService.id)}
                  className={`
                    cursor-pointer border-2 transition-colors duration-200
                    ${selectedSubService === subService.id ? 'border-black bg-gray-50' : 'border-transparent'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{subService.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black">
                        {subService.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {subService.description}
                      </p>
                      <p className="text-2xl font-bold text-black">
                        {subService.price}
                      </p>
                    </div>
                    {selectedSubService === subService.id && (
                      <div className="text-2xl">✓</div>
                    )}
                  </div>
                </SquircleCard>
              ))}
            </div>
          </div>
        )}

        {/* PASO 3: Selección de Fecha y Hora */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Selecciona Fecha y Hora
            </h2>

            {/* Selector de Fecha */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">
                Fecha
              </label>
              <input
                type="date"
                value={selectedDate || ''}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-black"
              />
            </div>

            {/* Selector de Hora */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-black mb-2">
                Hora
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 px-3 rounded-2xl font-medium transition-colors duration-200 text-sm
                      ${
                        selectedTime === time
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PASO 4: Datos del Cliente */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Confirma tus Datos
            </h2>

            <SquircleCard className="mb-6">
              <h3 className="text-lg font-bold text-black mb-4">Resumen de tu Cita</h3>
              <div className="space-y-3 text-gray-600 mb-4">
                <p>
                  <span className="font-medium text-black">Servicio:</span>{' '}
                  {mainServices.find(s => s.id === selectedMainService)?.name}
                </p>
                <p>
                  <span className="font-medium text-black">Opción:</span>{' '}
                  {subServices[selectedMainService]?.find(s => s.id === selectedSubService)?.name}
                </p>
                <p>
                  <span className="font-medium text-black">Fecha:</span>{' '}
                  {selectedDate}
                </p>
                <p>
                  <span className="font-medium text-black">Hora:</span>{' '}
                  {selectedTime}
                </p>
                <p>
                  <span className="font-medium text-black">Precio:</span>{' '}
                  <span className="text-xl font-bold text-black">
                    {subServices[selectedMainService]?.find(s => s.id === selectedSubService)?.price}
                  </span>
                </p>
              </div>
            </SquircleCard>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={clientData.name}
                  onChange={(e) =>
                    setClientData({ ...clientData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={clientData.phone}
                  onChange={(e) =>
                    setClientData({ ...clientData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-black placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Botones de Navegación */}
        <div className="flex gap-4 mb-8">
          <Button
            variant="secondary"
            fullWidth
            onClick={handleBack}
            disabled={step === 1}
          >
            Atrás
          </Button>

          {step < 4 ? (
            <Button variant="primary" fullWidth onClick={handleNext}>
              Siguiente
            </Button>
          ) : (
            <Button variant="primary" fullWidth onClick={handleConfirm}>
              Confirmar Cita
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
