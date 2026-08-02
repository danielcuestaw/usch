# USC Prácticas — Facultad de Humanidades y Artes

Plataforma web para estudiantes de la Facultad de Humanidades y Artes de la Universidad Santiago de Cali, con información sobre procesos de prácticas para las carreras de **Trabajo Social**, **Comunicación Social y Publicidad**.

---

## 🚀 Demo

Desplegado en Vercel: [usc-humanidades.vercel.app](https://usc-humanidades.vercel.app)

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | Framework principal e interfaz de usuario |
| Vite | Herramienta de construcción y desarrollo local |
| Tailwind CSS | Base del sistema de estilos |
| Framer Motion | Animaciones e interacciones visuales |
| Lucide React | Iconografía en formato SVG |
| Vercel | Despliegue y hosting |

---

## 📁 Estructura del proyecto

```
usch/
├── public/
│   └── images/          # Imágenes estáticas (logo, fotos)
├── src/
│   ├── components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── data/            # Contenido estático (reglamentos, convenios, guías)
│   ├── layouts/         # Estructura general de la página (MainLayout)
│   ├── pages/           # Vistas principales (Home)
│   ├── types.ts         # Tipos e interfaces de TypeScript
│   ├── App.tsx          # Componente raíz
│   └── index.tsx        # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## ⚙️ Correr el proyecto localmente

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- npm

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/danielcuestaw/usc-humanidades.git

# 2. Entrar a la carpeta
cd usc-humanidades/usch

# 3. Instalar dependencias
npm install

# 4. Correr en modo desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## 🌐 Despliegue

El proyecto usa **despliegue continuo con Vercel**. Cada vez que se hace un `git push` a la rama `main`, Vercel detecta el cambio y redespliega automáticamente.

```bash
# Flujo de trabajo para subir cambios
git add .
git commit -m "descripción del cambio"
git push origin main
```

---

## ✏️ Cómo agregar contenido

Toda la información de la plataforma está separada de la interfaz visual en la carpeta `data/`. Para agregar o modificar contenido **no es necesario tocar los componentes visuales**.

- **Reglamentos** → `src/data/regulations/`
- **Convenios** → `src/data/guidelines/agreements`
- **Salidas de campo** → `src/data/guidelines/fieldtrips`
- **Capítulos** → `src/data/chapters/`

---

## 🎨 Características principales

- **Animación de lava** en el banner principal con degradado de colores institucionales (azul y rojo USC)
- **Ondas SVG animadas** en la sección inferior
- **Libro interactivo** con animación de páginas para reglamentos
- **Buscador inteligente** que escanea párrafos completos en todos los libros
- **Responsive Design** adaptado para móvil, tablet y PC
- **Menú hamburguesa** en dispositivos móviles

---

## 🏛️ Universidad Santiago de Cali

Facultad de Humanidades y Artes  
Carreras: Trabajo Social · Comunicación Social y Publicidad
