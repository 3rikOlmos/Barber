// AdminDashboard - Panel de control para el administrador
// Funcionalidades: Ver citas, registrar manualmente, cancelar, marcar como completadas

import { useState } from 'react'
import SquircleCard from '../components/ui/SquircleCard'
import Button from '../components/ui/Button'

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: 'Juan Pérez',
      service: 'Corte + Barbería',
      date: '2026-03-27',
      time: '10:00',
      phone: '555-1234',
      status: 'pending',
    },
    {
      id: 2,
      clientName: 'Carlos López',
      service: 'Solo Corte',
      date: '2026-03-27',
      time: '11:30',
      phone: '555-5678',
      status: 'pending',
    },
    {
      id: 3,
      clientName: 'Miguel Sánchez',
      service: 'Solo Barbería',
      date: '2026-03-27',
      time: '14:00',
      phone: '555-9999',
      status: 'completed',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newAppointment, setNewAppointment] = useState({
    clientName: '',
    service: 'Corte + Barbería',
    date: '',
    time: '',
    phone: '',
  })

  const handleAddAppointment = () => {
    if (
      !newAppointment.clientName ||
      !newAppointment.date ||
      !newAppointment.time ||
      !newAppointment.phone
    ) {
      alert('Por favor completa todos los campos')
      return
    }

    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        ...newAppointment,
        status: 'pending',
      },
    ])

    setNewAppointment({
      clientName: '',
      service: 'Corte + Barbería',
      date: '',
      time: '',
      phone: '',
    })
    setShowForm(false)
  }

  const handleCompleteAppointment = (id) => {
    setAppointments(
      appointments.map(apt =>
        apt.id === id ? { ...apt, status: 'completed' } : apt
      )
    )
  }

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id))
  }

  const pendingAppointments = appointments.filter(apt => apt.status === 'pending')
  const completedAppointments = appointments.filter(
    apt => apt.status === 'completed'
  )

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-2">
          Panel de Administrador
        </h2>
        <p className="text-gray-600 mb-6">
          Gestiona las citas de tu barbería
        </p>

        <Button
          variant="primary"
          fullWidth
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancelar' : '+ Registrar Cita Manual'}
        </Button>
      </div>

      {/* Formulario para agregar cita manual */}
      {showForm && (
        <div className="px-4 pb-6 max-w-4xl mx-auto">
          <SquircleCard className="bg-gray-100">
            <h3 className="text-lg font-bold text-black mb-4">
              Nueva Cita Manual
            </h3>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Nombre del cliente"
                value={newAppointment.clientName}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    clientName: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black"
              />

              <select
                value={newAppointment.service}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    service: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black"
              >
                <option>Corte + Barbería</option>
                <option>Solo Corte</option>
                <option>Solo Barbería</option>
              </select>

              <input
                type="date"
                value={newAppointment.date}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    date: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black"
              />

              <input
                type="time"
                value={newAppointment.time}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    time: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                value={newAppointment.phone}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    phone: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black"
              />
            </div>

            <Button variant="primary" fullWidth onClick={handleAddAppointment}>
              Agregar Cita
            </Button>
          </SquircleCard>
        </div>
      )}

      {/* Citas Pendientes */}
      <div className="px-4 pb-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-black mb-4">
          Citas Pendientes ({pendingAppointments.length})
        </h3>

        {pendingAppointments.length === 0 ? (
          <SquircleCard>
            <p className="text-gray-600 text-center">
              No hay citas pendientes
            </p>
          </SquircleCard>
        ) : (
          <div className="space-y-4">
            {pendingAppointments.map(apt => (
              <SquircleCard key={apt.id} className="border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      {apt.clientName}
                    </h4>
                    <p className="text-gray-600 text-sm">{apt.service}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Pendiente
                  </span>
                </div>

                <div className="text-gray-600 text-sm mb-4 space-y-1">
                  <p>📅 {apt.date} - ⏰ {apt.time}</p>
                  <p>📞 {apt.phone}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => handleCompleteAppointment(apt.id)}
                  >
                    Completada
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => handleCancelAppointment(apt.id)}
                  >
                    Cancelar
                  </Button>
                </div>
              </SquircleCard>
            ))}
          </div>
        )}
      </div>

      {/* Citas Completadas */}
      {completedAppointments.length > 0 && (
        <div className="px-4 pb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-black mb-4">
            Citas Completadas ({completedAppointments.length})
          </h3>

          <div className="space-y-4">
            {completedAppointments.map(apt => (
              <SquircleCard key={apt.id} className="opacity-75 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      {apt.clientName}
                    </h4>
                    <p className="text-gray-600 text-sm">{apt.service}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Completada ✓
                  </span>
                </div>

                <div className="text-gray-600 text-sm">
                  <p>📅 {apt.date} - ⏰ {apt.time}</p>
                </div>
              </SquircleCard>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
