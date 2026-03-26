// Botón reutilizable con estética Squircle
// Clases clave: rounded-full, padding simétrico, sombra suave

export default function Button({
  children,
  variant = 'primary',
  size = 'base',
  fullWidth = false,
  onClick = null,
  disabled = false,
  className = '',
}) {
  const baseStyles = 'font-medium transition-all duration-200 rounded-full'

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 active:scale-95 disabled:bg-gray-400',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 active:scale-95 disabled:bg-gray-300',
    outline: 'border-2 border-black text-black hover:bg-gray-50 active:scale-95 disabled:border-gray-400 disabled:text-gray-400',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    base: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  )
}
