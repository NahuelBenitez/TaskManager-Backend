const express = require('express');
const { login, register } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Operaciones relacionadas con la autenticación (Login y Registro)
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Iniciar sesión y obtener un JWT
 *     description: Permite a los usuarios iniciar sesión utilizando su nombre de usuario y contraseña, y obtener un token JWT para autenticar futuras solicitudes.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: El nombre de usuario del usuario
 *                 example: "usuario1"
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Token JWT generado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: El token JWT generado
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Credenciales incorrectas o faltantes
 *       500:
 *         description: Error interno del servidor
 */
router.post('/api/auth/login', login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Registrar un nuevo usuario
 *     description: Permite registrar un nuevo usuario con nombre de usuario y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: El nombre de usuario del nuevo usuario
 *                 example: "usuario1"
 *               password:
 *                 type: string
 *                 description: La contraseña del nuevo usuario
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: El usuario ya existe
 *       500:
 *         description: Error al registrar el usuario
 */
router.post('/api/auth/register', register);

module.exports = router;
