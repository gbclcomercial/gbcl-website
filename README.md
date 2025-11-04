
# GBC Auditores - Maqueta Web Actualizada (Next.js)

Esta carpeta contiene la versión actualizada del sitio web de GBC Auditores, lista para reemplazar los archivos actuales en tu repositorio GitHub.

**Qué incluye:**
- Logo oficial en `public/logo.png`
- Textos adaptados y modernizados
- Diseño corporativo (azul/dorado)
- Formulario listo para integrarse con un servicio de envío (Formspree o Netlify Forms)
- Botón de WhatsApp y pie de página con Bogotá, Colombia (William Néstor Bolívar)

## Cómo publicar (pasos rápidos)
1. Descarga el ZIP y descomprímelo.
2. Entra a tu repositorio `gbcl-website` en GitHub.
3. Sube/replace los archivos (Add file → Upload files) y **Commit** los cambios.
4. Vercel detectará automáticamente el cambio y redeplegará la web.

## Formulario de contacto (configurar envío real)
Actualmente el formulario tiene `action="REPLACE_FORM_ENDPOINT"`.
Tienes dos opciones fáciles para activar el envío de correos:

### Opción A — Formspree (recomendada, gratuita para volúmenes pequeños)
1. Ve a https://formspree.io y crea una cuenta con el email: **gbcl.comercial.sas@gmail.com**
2. Añade un nuevo formulario y te darán una URL del tipo `https://formspree.io/f/{your_id}`
3. Reemplaza `REPLACE_FORM_ENDPOINT` en `pages/index.js` por esa URL.
4. Subir y Vercel enviará las respuestas a ese correo.

### Opción B — Netlify Forms (si usas Netlify en lugar de Vercel)
- Instrucciones en README de Netlify; requiere atributos `data-netlify="true"` en el formulario.

## Necesitas ayuda para subir los archivos?
Si prefieres, puedo preparar el ZIP y dejar instrucciones para que solo pegues y reemplacen. 
También puedo guiarte por teléfono o reunión si lo deseas.

---
Dirección: Bogotá, Colombia — Contacto: William Néstor Bolívar
Email formulario: gbcl.comercial.sas@gmail.com
WhatsApp: +57 313 348 7537
