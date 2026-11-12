# Página Metaverso - Campus Virtual Santo Tomás

Landing page de una sola página construida con React y Vite. Incluye las secciones Inicio, Servicios, Galería y Contacto, con navegación por scroll, carruseles y un botón que lleva al metaverso.

## Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- **Node.js 18 o superior** (recomendado Node.js 20 LTS). Descárgalo en https://nodejs.org
- **npm** (se instala junto con Node.js)
- Un navegador moderno (Chrome, Edge, Firefox o Safari)

Para verificar que los tienes instalados:

```bash
node -v
npm -v
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/ndiazdev/pagina_metaverso.git
```

2. Entra a la carpeta del proyecto:

```bash
cd pagina_metaverso/front
```

3. Instala las dependencias:

```bash
npm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite mostrará una URL como `http://localhost:5173`. Ábrela en el navegador. Los cambios que hagas en el código se actualizarán automáticamente.

## Compilar para producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`. Para previsualizar esa versión:

```bash
npm run preview
```

## Estructura del proyecto

```text
pagina_metaverso/
└── front/
    ├── public/
    │   └── images/          Imágenes públicas (modelo 3D y logo)
    ├── src/
    │   ├── components/      Componentes de React
    │   ├── App.jsx          Estructura general de la página
    │   ├── config.js        Enlace del metaverso
    │   ├── main.jsx         Punto de entrada
    │   └── styles.css       Estilos generales
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Configuración

### Enlace del metaverso

El botón **Comenzar** y el botón del hero usan la misma URL, definida en `front/src/config.js`:

```js
export const METAVERSE_URL =
  "https://campusvirtual.santototunja.edu.co/metaverso-santototunja/login";
```

### Imágenes pendientes

Los carruseles de **Servicios**, **Características únicas** y **Galería** están preparados para recibir imágenes. Por ahora muestran espacios vacíos. Para agregarlas, asigna la ruta en el arreglo `image` de cada componente:

- Servicios: `front/src/components/ServicesCarousel.jsx`
- Características únicas: `front/src/components/UniqueCarousel.jsx`
- Galería: `front/src/components/Gallery.jsx`

Ejemplo:

```js
{ id: 1, label: "Servicio 1", image: "/images/servicios/servicio-1.jpg" }
```

Guarda las imágenes dentro de `front/public/images/` para que estén disponibles desde la raíz del sitio.

## Notas

- La tipografía Poppins se carga desde Google Fonts, por lo que se necesita conexión a internet para verla correctamente.
- La carpeta `node_modules` y la carpeta `dist` no se suben al repositorio.
