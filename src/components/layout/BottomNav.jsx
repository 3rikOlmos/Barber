// Navegación inferior móvil con Glassmorphism
// Clases clave: fixed bottom-0, backdrop-blur-md, bg-white/70

import { Home, Calendar, Users, Settings } from 'lucide-react'

export default function BottomNav({ activeTab = 'home', onTabChange = () => {} }) {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'booking', label: 'Citas', icon: Calendar },
    { id: 'portfolio', label: 'Trabajos', icon: Users },
    { id: 'admin', label: 'Admin', icon: Settings },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="backdrop-blur-md bg-white/70 border-t border-gray-200">
        <div className="flex justify-around items-center max-w-4xl mx-auto">
          {tabs.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  flex-1 flex flex-col items-center justify-center py-4 gap-1
                  transition-colors duration-200
                  ${isActive ? 'text-black' : 'text-gray-500'}
                  hover:text-black
                `}
              >
                <Icon size={24} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
