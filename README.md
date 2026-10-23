# Demigods Arg — Frontend

¡Bienvenido a la bitácora de código de **Demigods Arg**! Este repositorio contiene la interfaz web pública de la pagina web

La aplicación está diseñada con una estética rústica y temática de cabaña de madera, con microinteracciones y animaciones 3D para hacerlo mas interactivo y divertido.

---

## Estructura y Secciones del Sitio

El sitio está organizado sin barra superior tradicional para favorecer la inmersión interactiva desde el patio central:

1. **Inicio (`/`)**: 
   * **Ventana de Bienvenido (3D)**: Ventana interactiva de madera abatible que revela las secciones *¿Qué es Demigods Arg?* y *¿Por qué hacemos todo esto?*.
   * **Portales Principales**: 4 tarjetas rústicas estilo 3D para navegar hacia *Campamento*, *Tienda*, *Galería* y *Conócenos*.
2. **Conócenos (`/conocenos`)**: 
   * Resumen de historia del campamento (*¿Cómo empezó todo?*)
3. **Campamento (`/campamento`)**: 
   * Explicación de *¿Qué hacemos en el campamento?* y mapa de las 3 zonas principales: **Ogigia** (rol, juegos de mesa, descanso), **Flota** (softcombat, combate y estrategia) e **Íthaca** (mesa de rol).
4. **Galería de Fotos (`/galeria`)**: 
   * Álbum visual organizado por eventos presenciales con vista ampliada de fotografías mediante modal.
5. **Tienda (`/tienda`)**: 
   * Catálogo del *Mercado Mestizo* con accesorios, indumentaria y entradas para próximos presenciales.

---

## Tecnologías Utilizadas

* **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19 / Next 15).
* **Lenguaje**: TypeScript.
* **Estilos**: Tailwind CSS + Inline Styles de React para garantizar el renderizado preciso de transformaciones y perspectivas 3D en todos los navegadores.
* **Iconografía**: [Lucide React](https://lucide.dev/).
* **Despliegue**: [Vercel](https://vercel.com/).

---

## 🚀 Guía de Instalación y Ejecución Local

pueden clonar y ejecutar este proyecto en su entorno local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/TU_USUARIO/demigods-front.git](https://github.com/TU_USUARIO/demigods-front.git)
cd demigods-front