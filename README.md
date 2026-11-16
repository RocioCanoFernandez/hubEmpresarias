# Hub Digital - Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas)

Hub digital y tarjeta interactiva oficial para la **Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas)**, diseñado bajo los estándares de arquitectura, rendimiento y UX móvil del **Ecosistema SeviAI**.

---

## 📌 Enlaces y Recursos Integrados
- **Web Oficial:** [https://empresariassevillanas.es/](https://empresariassevillanas.es/)
- **Prioridad 1 (Evento Destacado):** [Inscripción Comida de Navidad (Google Forms)](https://docs.google.com/forms/d/e/1FAIpQLSdrGFj2B5HsQWituBtckty25glBaOQQHjmLbt9_tYHtDLwSWg/viewform?usp=header)
- **Solicitud de Incorporación (PDF):** Documento oficial descargable con solicitud de socia y orden de domiciliación SEPA (`public/Solicitud_Asociada_Empresarias_Sevillanas.pdf`).
- **Boletín Informativo:** Enlace directo de suscripción / información.
- **Redes Sociales:** LinkedIn, Instagram, Facebook y Twitter/X.
- **Contacto Directo:** Teléfono (+34 672 68 92 47), Email (`info@empresariassevillanas.es`) y WhatsApp flotante.
- **vCard Móvil / NFC:** Botón flotante top-right que genera dinámicamente el contacto `.vcf` en el navegador del usuario para guardarlo al instante en su agenda.

---

## 📁 Estructura del Proyecto

```text
hub_empresariassevillanas/
├── public/
│   ├── empresariassevillanas_fondo.png
│   ├── empresariassevillanas_logo.png
│   ├── logo_sin_fondo.png (Logo SeviAI Ecosystem)
│   └── Solicitud_Asociada_Empresarias_Sevillanas.pdf
├── Dockerfile
├── index.html
├── style.css
├── vcard.js
└── README.md
```

---

## 🚀 Despliegue en Servidor / VPS / EasyPanel

El proyecto es estático de máxima velocidad (HTML5 + CSS3 + Vanilla JS) y cuenta con un contenedor Docker listo para producción basado en Nginx Alpine:

```bash
# Construir la imagen Docker
docker build -t hub-empresarias-sevillanas .

# Correr el contenedor en el puerto deseado (ej. 8080)
docker run -d -p 8080:80 --name hub_empresarias hub-empresarias-sevillanas
```

Para EasyPanel, simplemente selecciona el repositorio y la ruta raíz de esta carpeta para desplegar automáticamente vía `Dockerfile`.

---

## ✒️ Licencia y Atribución
© 2026 Asociación de Mujeres Empresarias Hispalenses (Empresarias Sevillanas) · **SeviAI Ecosystem**
Diseñado y desarrollado por **SeviAI** (Rocío Cano).
