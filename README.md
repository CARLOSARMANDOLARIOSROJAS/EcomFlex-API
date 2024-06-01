# EcomFlex API

EcomFlex API es el backend de la aplicación EcomFlex, construido con Node.js y Prisma. Este backend proporciona las rutas y lógica necesarias para manejar la funcionalidad del comercio electrónico,
 incluyendo la gestión de productos, categorías y usuarios administradores.

## Tecnologías Utilizadas

- Node.js
- Prisma (ORM)
- PostgreSQL (Base de datos)
- CORS
- Morgan (Logger)
- Multer (Manejo de archivos)

## Características

- **Gestión de Productos:** Crear, leer, actualizar y eliminar productos.
- **Gestión de Categorías:** Crear, leer, actualizar y eliminar categorías.
- **Autenticación de Administradores:** Login para administradores.
- **Middleware:** Uso de CORS, Morgan y Multer para manejar solicitudes, logging y subida de archivos respectivamente.

## Despliegue

Puedes ver la API desplegada en Render.com: [EcomFlex API en Render](https://ecomflex-api-1.onrender.com)

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/ecomflex-api.git
    cd ecomflex-api
    ```

2. Instalar dependencias:

    ```bash
    npm install
    ```

3. Configurar las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```bash
    DATABASE_URL='postgres://carlos:ATYDfULslfTz7tVXTepYE3sLsuRg9Cgr@dpg-cpddbbdds78s73edfsvg-a.oregon-postgres.render.com/ecomflexdb'
    ```

    Asegúrate de actualizar el valor de `DATABASE_URL` con la URL de tu base de datos PostgreSQL.

4. Ejecutar el servidor:

    ```bash
    npm run dev
    ```

## Uso

El backend proporciona varias rutas para manejar la funcionalidad de la aplicación. Aquí hay un resumen de algunas de las rutas disponibles:

- **Productos:**
  - `GET /api/products` - Obtener todos los productos.
  - `GET /api/products/:id` - Obtener un producto por ID.
  - `POST /api/products` - Crear un nuevo producto.
  - `PUT /api/products/:id` - Actualizar un producto por ID.
  - `DELETE /api/products/:id` - Eliminar un producto por ID.

- **Categorías:**
  - `GET /api/categories` - Obtener todas las categorías.
  - `GET /api/categories/:id` - Obtener una categoría por ID.
  - `POST /api/categories` - Crear una nueva categoría.
  - `PUT /api/categories/:id` - Actualizar una categoría por ID.
  - `DELETE /api/categories/:id` - Eliminar una categoría por ID.

- **Autenticación de Administradores:**
  - `POST /admin/login` - Iniciar sesión como administrador.

