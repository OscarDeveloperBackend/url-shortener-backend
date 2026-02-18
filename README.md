# URL Shortener Backend

Backend para acortar URLs con Node.js y MongoDB, dockerizado para despliegue rápido y sencillo.

## Tecnologías

- Docker
- Node.js (v24.x)
- Express
- MongoDB (v8.x)

## Instalación

1. Clonar el repositorio.

   ```bash
   git clone https://github.com/OscarDeveloperBackend/url-shortener-backend.git

   cd url-shortener-backend
   ```

2. Crear archivo `.env` con las variables necesarias (usar `.env.template` como referencia).
3. Ejecutar:
   ```bash
   docker-compose up --build -d
   ```

## Uso

Esta API cuenta con 4 endpoints:

### GET /url

Saludo cordial y enlace al repositorio.

### GET /url/all

Obtiene todos los registros de URLs.

### POST /url

Acorta una URL original pasando como parámetro `url_base`.

**Ejemplo de request:**

```json
{
  "url_base": "https://url-example.com/"
}
```

**Ejemplo de response:**

```json
{
  "shortcode": "xapsfs",
  "url_base": "https://url-example.com/"
}
```

### GET: /url/:code

Redirige a la URL original usando el shortcode.

- http://localhost:3000/url/xapsfs

redirecciona a

- https://url-example.com/


### Frontend del Proyecto
***
En proceso.

[URL Shortener Frontend](https://github.com/OscarDeveloperBackend/url-shortener-frontend)