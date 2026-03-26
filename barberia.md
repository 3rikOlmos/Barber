# 💈 Plan de Proyecto MVP: Web App Estética \& Barbería (Mobile-First)

## 📌 Descripción General

Producto Mínimo Viable (MVP) para una aplicación web enfocada en dispositivos móviles (Mobile-First) destinada a una estética/barbería. La aplicación tiene un doble propósito: funcionar como una tarjeta de presentación digital interactiva (portafolio, precios, ubicación) y como un sistema de gestión de citas tanto para el cliente como para el administrador.

## 🛠️ Stack Tecnológico (Frontend-Focused)

Para mantener un desarrollo ágil y moderno:

* **Core:** React.js (Recomendado iniciar con Vite para mayor velocidad).
* **Lenguaje:** JavaScript (ES6+).
* **Estilos:** Tailwind CSS.
* **Iconos:** Lucide React o Heroicons (minimalistas, estilo Apple).
* **Backend sugerido para MVP rápido:** Firebase o Supabase (para autenticación sencilla y base de datos en tiempo real para las citas) pero por el momento será todo con datos hardcode.

## 🎨 Guía de Diseño UI/UX: El enfoque "Squircle"

El diseño se basará en la estética de Apple, priorizando la limpieza, legibilidad y formas orgánicas.

* **Formas (Squircle):** Evitar bordes afilados. Usar clases de Tailwind como `rounded-2xl` o `rounded-3xl` para tarjetas, botones y modales.
* **Sombras y Profundidad:** Sombras suaves y difusas (`shadow-sm`, `shadow-md`, `shadow-lg` modificadas para ser sutiles).
* **Efectos:** Uso de *Glassmorphism* (cristal esmerilado) para barras de navegación o menús inferiores usando `backdrop-blur-md bg-white/70`.
* **Tipografía:** Fuentes Sans-Serif limpias (Inter, San Francisco, Roboto).
* **Espaciado:** Amplio uso de padding (`p-4`, `p-6`) para dar "respiro" a los elementos (muy característico de iOS).

## 🚀 Funcionalidades del MVP

### 📱 Vista del Cliente (Pública)

1. **Home / Landing (Informativa):**

   * Hero section con el logo y llamado a la acción principal ("Agendar Cita").
   * Sección de Promociones destacadas en tarjetas tipo *squircle* deslizables (carrusel horizontal).
2. **Portafolio de Trabajos:**

   * Galería tipo grid (estilo Instagram) con fotos de cortes realizados.
3. **Flujo de Agendamiento de Cita (3 Pasos):**

   * **Paso 1: Selección de Servicio:** Tarjetas seleccionables (Solo Corte, Solo Barbería, Corte + Barbería) con sus respectivos precios.
   * **Paso 2: Selección de Fecha y Hora:** Calendario interactivo que bloquea visualmente los días/horas ocupados.
   * **Paso 3: Datos del Cliente y Confirmación:** Formulario simple (Nombre, Teléfono) y botón de confirmación.
4. **Información General:**

   * Lista de precios general.
   * Ubicación (Integración de mapa o enlace directo a Google Maps).

### ⚙️ Vista del Administrador (Privada)

1. **Dashboard de Citas:**

   * Vista de lista o calendario con las citas del día/semana.
   * Capacidad para registrar citas manualmente (para clientes que llegan físicamente o llaman).
   * Capacidad de cancelar o marcar citas como completadas.



## 🏗️ Arquitectura de Componentes Propuesta (React)

```text
src/
 ├── components/
 │    ├── layout/
 │    │    ├── Navbar.jsx (Con efecto glassmorphism)
 │    │    └── BottomNav.jsx (Para navegación móvil principal)
 │    ├── ui/
 │    │    ├── SquircleCard.jsx (Componente base para reutilizar)
 │    │    └── Button.jsx (Botones con bordes redondeados completos)
 │    ├── booking/
 │    │    ├── ServiceSelector.jsx
 │    │    ├── TimeSlotPicker.jsx
 │    │    └── BookingForm.jsx
 │    └── portfolio/
 │         └── ImageGallery.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Booking.jsx
 │    ├── AdminDashboard.jsx
 │    └── Location.jsx
 ├── utils/
 │    └── dateFormatting.js
 └── App.jsx

