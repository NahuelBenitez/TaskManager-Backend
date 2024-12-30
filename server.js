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

connectDB();

app.use(cors());


app.use(express.json());


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


app.use(taskRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
