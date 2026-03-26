// App.jsx - Componente raíz con enrutamiento simple basado en estado

import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import BottomNav from './components/layout/BottomNav'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Portfolio from './pages/Portfolio'
import AdminDashboard from './pages/AdminDashboard'
import Location from './pages/Location'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'booking':
        return <Booking />
      case 'portfolio':
        return <Portfolio />
      case 'admin':
        return <AdminDashboard />
      case 'location':
        return <Location />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto">
        {renderPage()}
      </main>
      <BottomNav activeTab={currentPage} onTabChange={setCurrentPage} />
    </div>
  )
}

export default App
