# 💈 Barbería & Estética - Web App MVP

Aplicación web Mobile-First para gestión de citas en una barbería/estética, construida con **React.js**, **Tailwind CSS** y diseño inspirado en Apple (Squircle, Glassmorphism).

## 🚀 Quick Start

### Prerequisitos
- Node.js 16+ instalado
- npm o yarn

### Instalación y Ejecución

1. **Clona el repositorio:**
```bash
git clone https://github.com/3rikOlmos/BarberShop.git
cd BarberShop
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **La app se abrirá automáticamente en:**
```
http://localhost:3000
```

### ⚠️ Importante
**NO abras `index.html` directamente** en el navegador. Siempre usa `npm run dev` para ejecutar el servidor de desarrollo de Vite.

### Build para Producción

```bash
npm run build
npm run preview
```

El build generará una carpeta `dist/` con los archivos optimizados listos para producción.

## 📁 Estructura del Proyecto

```
src/
 ├── components/
 │    ├── layout/
 │    │    ├── Navbar.jsx (Navegación superior con Glassmorphism)
 │    │    └── BottomNav.jsx (Navegación móvil inferior)
 │    ├── ui/
 │    │    ├── SquircleCard.jsx (Componente base reutilizable)
 │    │    └── Button.jsx (Botones con estética Squircle)
 │    └── booking/ (Componentes para el flujo de citas)
 ├── pages/
 │    ├── Home.jsx (Landing con promociones)
 │    ├── Booking.jsx (Agendamiento 3 pasos)
 │    ├── Portfolio.jsx (Galería de trabajos)
 │    ├── AdminDashboard.jsx (Panel administrador)
 │    └── Location.jsx (Información de ubicación)
 ├── App.jsx (Componente raíz con routing)
 └── index.css (Estilos globales + Tailwind)
```

## 🎨 Características del Diseño

- ✅ **Squircle Design:** Bordes redondeados (`rounded-2xl`, `rounded-3xl`)
- ✅ **Glassmorphism:** Efectos de cristal esmerilado en navbar y menú inferior
- ✅ **Mobile-First:** Optimizado para dispositivos móviles
- ✅ **Padding Generoso:** Estilo Apple con espacios amplios
- ✅ **Sombras Suaves:** Profundidad visual con `shadow-sm/md/lg`

## 📱 Funcionalidades MVP

### Vista Cliente (Pública)
- 🏠 **Home:** Landing con hero, promociones destacadas, información general
- 📅 **Booking:** Flujo de 3 pasos (Servicio → Fecha/Hora → Confirmación)
- 🖼️ **Portfolio:** Galería tipo Instagram de trabajos realizados
- 📍 **Location:** Información de ubicación y contacto

### Vista Admin (Privada)
- 📊 **Dashboard:** Ver citas pendientes/completadas
- ➕ **Registro Manual:** Agregar citas manualmente
- ✅ **Gestión:** Marcar como completadas o cancelar citas

## 🛠️ Stack Tecnológico

- **Framework:** React.js 18
- **Bundler:** Vite
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **Lenguaje:** JavaScript (ES6+)

## 📝 Notas Importantes

- Todos los datos están **hardcodeados** (sin backend)
- El sistema de citas es funcional en memoria (se resetea al recargar)
- No requiere autenticación en el MVP actual
- Responsive desde mobile hasta desktop

## 🔒 Acceso Admin

Por ahora, el panel admin es accesible desde el menú inferior (tab Admin). En futuras versiones, será necesario autenticarse.

## 📄 Licencia

Proyecto personal para fines educativos y demostración del MVP.
