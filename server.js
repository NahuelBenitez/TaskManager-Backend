require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();


// Usar CORS para permitir solicitudes desde tu frontend
app.use(cors());

// Middleware
app.use(express.json());

// Configuracion de Swagger
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Task Manager API',
        version: '1.0.0',
        description: 'Documentación de la API para gestionar tareas',
      },
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: 'JWT Bearer Token'
        }
      },
    },
    apis: ['./routes/*.js'],
  };
  
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use(taskRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
