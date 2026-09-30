# FLIKK - Sitio Web Oficial

Sitio web corporativo y empresarial de **FLIKK**, desarrollado con tecnologías modernas, enfoque en alto rendimiento, seguridad y estricta fidelidad a la información legal oficial registrada ante la Cámara de Comercio y Meta Business Suite.

---

## 🏢 Información Oficial de la Empresa

- **Razón Social:** Flikk
- **NIT:** 900380598-6
- **Matrícula Mercantil:** 505019-55 (Cámara de Comercio de Cali)
- **Ciudad / Jurisdicción:** Cali, Valle del Cauca, Colombia
- **Dirección Física:** CL 70 NORTE #17-374 CS 94
- **Teléfono Oficial:** +57 3044028376
- **Correo Oficial:** soporte@flikk.online
- **Dominio Principal:** [https://flikk.online/](https://flikk.online/)

---

## 🛠️ Stack Tecnológico

- **Frontend Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6 / 8](https://vitejs.dev/) (Compilación estática ultrarrápida, 0 dependencias CDN externas)
- **Estilos:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **SEO & Structured Data:** OpenGraph, Twitter Cards, Canonical URL, Schema.org Corporation JSON-LD

---

## 📁 Estructura del Proyecto

```text
├── public/
│   ├── assets/
│   │   ├── flikk-logo-icon.png    # Isotipo oficial de FLIKK
│   │   └── flikk-hero-banner.jpg  # Banner e identidad visual oficial
│   ├── favicon.png                # Favicon del sitio
│   ├── og-image.jpg               # Imagen de previsualización para redes / Meta
│   ├── robots.txt                 # Directivas de indexación limpia para buscadores
│   └── sitemap.xml                # Mapa del sitio oficial
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navegación responsive con sticky blur y menú móvil
│   │   ├── Hero.tsx               # Presentación principal con datos oficiales y CTA
│   │   ├── About.tsx              # Sección "Sobre FLIKK", pilares y datos de Cámara de Comercio
│   │   ├── Services.tsx           # Catálogo de servicios tecnológicos corporativos
│   │   ├── Solutions.tsx          # 4 ejes de impacto tecnológico y flujo metodológico
│   │   ├── CTA.tsx                # Llamado a la acción con enlace directo a WhatsApp y contacto
│   │   ├── Contact.tsx            # Datos de contacto exactos y formulario validado
│   │   ├── Footer.tsx             # Pie de página con NIT, dirección, teléfono y enlaces legales
│   │   └── LegalModal.tsx         # Modales de Política de Privacidad (Habeas Data) y Términos
│   ├── data/
│   │   └── company.ts             # Única fuente de verdad para los datos oficiales
│   ├── App.tsx                    # Estructura principal de la aplicación
│   ├── index.css                  # Directivas de Tailwind y estilos ambientales sobrios
│   ├── main.tsx                   # Entrada de React al DOM
│   └── vite-env.d.ts
├── index.html                     # HTML5 con metadatos SEO, OpenGraph y JSON-LD
├── package.json
├── tailwind.config.js             # Configuración con paleta de FLIKK y breakpoints
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Ejecución en Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrir en el navegador en `http://localhost:3000` (o el puerto indicado en la terminal).

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera los archivos estáticos optimizados en la carpeta `dist/`.

4. **Previsualizar el build de producción:**
   ```bash
   npm run preview
   ```

---

## 🌐 Despliegue en Producción (`https://flikk.online/`)

El build genera archivos estáticos puros (`HTML`, `CSS`, `JS`, imágenes) listos para cualquier proveedor de hosting:

### Opción A: Vercel (Recomendado)
1. Conectar el repositorio de GitHub `https://github.com/Santiago04-web/flikk.git`.
2. Vercel detectará Vite automáticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. En la configuración de dominio en Vercel, agregar `flikk.online` y apuntar los registros DNS según las indicaciones de Vercel.

### Opción B: Cloudflare Pages / Netlify / Hosting Tradicional (cPanel / Nginx / Apache)
1. Ejecutar `npm run build`.
2. Subir el contenido de la carpeta `dist/` a la raíz pública (`public_html` o directorio raíz web del servidor).
3. Asegurar que HTTPS esté activo mediante certificado SSL (Let's Encrypt o Cloudflare).

---

## 🔒 Seguridad y Verificación

- **Cero dependencias CDN en runtime:** Todo el CSS y JS está empaquetado en local/build.
- **Sin scripts de terceros:** No se incluyen trackers invasivos ni redirecciones por User-Agent o parámetros (?fbclid=).
- **Consistencia legal total:** Cumple estrictamente con los requisitos de verificación comercial de Meta Business Suite y la legislación colombiana (Ley 1581 de 2012).
