# Coally Task Manager - Backend

Este es el backend de **Coally Task Manager**, una aplicación de gestión de tareas que permite a los usuarios crear, leer, actualizar y eliminar tareas. El backend está desarrollado con **Node.js**, **Express**, y **MongoDB** para almacenar las tareas y la información de los usuarios
## Link

https://taskmanager-backend-ou5n.onrender.com/api-docs/

  

El deploy se realizo con Render como un WebService

https://render.com/

## Tecnologías

-  **Node.js** - Entorno de ejecución de JavaScript en el servidor.

-  **Express** - Framework web para Node.js.

-  **MongoDB** - Base de datos NoSQL.

-  **Mongoose** - ODM (Object Data Modeling) para MongoDB y Node.js.

-  **JWT (JSON Web Tokens)** - Para la autenticación segura de los usuarios.

-  **Bcryptjs** - Para el hash de contraseñas de usuarios.

-  **Dotenv** - Para manejar variables de entorno de forma segura.

-  **Express Validator** - Para validar datos.

- **Cors** - Para permitir acceder a los enpoints desde el frontend.

- **Swagger** - Para la documentación.
  

## Instalación

Sigue estos pasos para configurar el backend en tu entorno local.
  

**1. Clona el repositorio:**
git clone <url_del_repositorio>
cd coally-backend

`



**2. Instalar dependencias**

Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto:

npm install

**3. Configurar las variables de entorno**

Crea un archivo .env en la raíz del proyecto para definir las variables de entorno necesarias (como la URL de tu base de datos y la clave secreta para JWT). Un ejemplo de archivo .env:

MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/coallydb?retryWrites=true&w=majority

JWT_SECRET=<tu_clave_secreta>

PORT=5000

  

MONGO_URI: Es la URI de conexión a tu base de datos MongoDB. Si usas MongoDB Atlas, esta URI la encontrarás en tu dashboard de Atlas.

  

JWT_SECRET: Es la clave secreta que se utilizará para firmar los tokens JWT. Puedes generar una clave secreta con cualquier generador de contraseñas seguro.

PORT: Es el puerto en el que se ejecutará el servidor (puedes mantener el valor por defecto de 5000 o cambiarlo).

  
**4. Iniciar el servidor**

Una vez que hayas configurado el archivo .env, ejecuta el siguiente comando para iniciar el servidor:  

npm start

Esto iniciará el servidor en el puerto definido en la variable PORT (por defecto, el puerto 5000).

  

*Endpoints de la API*

Autenticación

POST /api/auth/login

POST /api/auth/register

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

**Variables de Entorno**


Este proyecto usa el paquete dotenv para cargar las variables de entorno desde un archivo .env en el directorio raíz.

  

Asegúrate de definir las siguientes variables en tu archivo .env:

  

MONGO_URI: La URI de conexión a tu base de datos MongoDB.

JWT_SECRET: La clave secreta que se usará para firmar los tokens JWT.

PORT: El puerto en el que se ejecutará el servidor.

**Autor**

***Coally Task*** Manager es desarrollado por **Nahuel Benitez**

  

Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.