# ==============================================================================
# Dockerfile para SeviAI Hub - Empresarias Sevillanas
# Despliegue estático ultra-ligero y de alto rendimiento con Nginx Alpine
# ==============================================================================
FROM nginx:alpine

# Copiamos todo el contenido (index.html, style.css, vcard.js y directorio public)
COPY . /usr/share/nginx/html

# Exponer el puerto 80 estándar
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
