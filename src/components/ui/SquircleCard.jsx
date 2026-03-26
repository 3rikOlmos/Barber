// Componente base reutilizable con diseño Squircle
// Clases clave: rounded-2xl/3xl, shadow-md, padding amplio

export default function SquircleCard({ children, className = '', onClick = null }) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        rounded-3xl
        shadow-md
        p-6
        transition-all duration-200
        hover:shadow-lg
        ${onClick ? 'cursor-pointer active:scale-95' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
