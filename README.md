# Venta Las Alberquillas — Web

Web de una sola página (one-page) para **Venta Las Alberquillas**, restaurante y venta tradicional andaluza en Coín (Málaga), abierto desde 1982.

Sitio construido con **HTML, CSS y JavaScript puros**, sin frameworks ni proceso de build, para poder subir la carpeta tal cual a cualquier hosting estático o a GitHub Pages.

## Estructura del proyecto

```
├── index.html                 → Página principal (una sola página con scroll)
├── carta-alberquillas.pdf     → Carta descargable en PDF
├── css/
│   └── style.css              → Estilos (paleta, tipografía, animaciones, responsive)
├── js/
│   └── main.js                 → Interactividad (menú, animaciones, carrusel, cookies...)
├── img/                        → Fotografías, favicon e iconos
└── legal/
    ├── aviso-legal.html
    ├── privacidad.html
    └── cookies.html
```

## Secciones de la web

1. Hero a pantalla completa
2. Nuestra historia (desde 1982)
3. De nuestra huerta a tu mesa
4. La carta (por categorías, con descarga en PDF)
5. Celebraciones (bodas, bautizos y comuniones)
6. Galería
7. Opiniones (Google y TripAdvisor)
8. Reservas y contacto
9. Ubicación (mapa embebido)
10. Footer con enlaces legales

## Contenido pendiente de editar

- **Fotos pendientes** (marcadas con un recuadro discontinuo en la propia web): foto interior/de detalle para "Nuestra historia", foto del patio decorado para bodas en "Celebraciones", y una foto de fachada de noche en la Galería. En cuanto se disponga de ellas, basta con sustituir el bloque `.foto-pendiente` correspondiente por una etiqueta `<img>` apuntando a la nueva foto en `img/`.
- **Precios de la carta**: son orientativos, hay que confirmarlos con el propietario (`index.html`, sección `#carta`, y `carta-alberquillas.pdf`).
- **Correo electrónico de contacto**: pendiente de indicar en `legal/aviso-legal.html`.
- **Punto kilométrico exacto** de la Ctra. Coín–Alhaurín el Grande: confirmar que "km 1.5" es correcto.
- **Dominio real**: las URLs canónicas y Open Graph usan `https://www.ventalasalberquillas.com/` como marcador; cambiarlas por el dominio definitivo cuando se contrate.

## Cómo verlo en local

Abrir `index.html` directamente en el navegador (doble clic), o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Cómo publicarlo con GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado) y súbelo:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/venta-las-alberquillas.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub, entra en **Settings → Pages**.
3. En "Build and deployment" selecciona **Deploy from a branch**, elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub Pages publicará la web en `https://TU-USUARIO.github.io/venta-las-alberquillas/` en uno o dos minutos.
5. (Opcional) Si se compra un dominio propio, se puede configurar en el mismo apartado de Pages ("Custom domain") y crear los registros DNS correspondientes (CNAME o registros A) en el proveedor del dominio.

## Créditos

Diseñado y desarrollado por [Lumetrix](https://lumetrix.ai).
