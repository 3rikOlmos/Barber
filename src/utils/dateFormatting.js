// Utilidades para formateo de fechas
// Funciones reutilizables para formatos recomendados

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('es-ES', options)
}

export const formatTime = (timeString) => {
  return timeString // Ya viene en formato HH:MM
}

export const formatDateTime = (dateString, timeString) => {
  return `${formatDate(dateString)} a las ${formatTime(timeString)}`
}

export const getAvailableDays = (blockedDates = []) => {
  // Retorna los próximos 14 días disponibles
  const days = []
  const today = new Date()

  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() + i)

    // Excluir domingos
    if (date.getDay() !== 0) {
      const dateStr = date.toISOString().split('T')[0]
      if (!blockedDates.includes(dateStr)) {
        days.push(dateStr)
      }
    }
  }

  return days
}
