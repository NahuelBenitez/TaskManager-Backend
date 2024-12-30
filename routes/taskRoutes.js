const express = require('express');
const { body } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Tasks
 *     description: Operaciones relacionadas con las tareas
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Crear una nueva tarea
 *     description: Permite crear una tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El título de la tarea
 *                 example: "Tarea de ejemplo"
 *               description:
 *                 type: string
 *                 description: Descripción de la tarea
 *                 example: "Descripción de la tarea"
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *       400:
 *         description: Datos de tarea incorrectos
 *       500:
 *         description: Error interno del servidor
 */
router.post(
  '/api/tasks',
  authMiddleware,
  body('title').not().isEmpty().withMessage('El título es obligatorio'),
  createTask
);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtener todas las tareas
 *     description: Permite obtener todas las tareas.
 *     responses:
 *       200:
 *         description: Lista de tareas
 *       500:
 *         description: Error al obtener las tareas
 */
router.get('/api/tasks', authMiddleware, getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtener tarea por ID
 *     description: Permite obtener una tarea específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la tarea
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al obtener la tarea
 */
router.get('/api/tasks/:id', authMiddleware, getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     tags: [Tasks]
 *     summary: Actualizar tarea por ID
 *     description: Permite actualizar una tarea existente por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la tarea
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El título de la tarea
 *                 example: "Nuevo título de tarea"
 *               description:
 *                 type: string
 *                 description: Descripción de la tarea
 *                 example: "Nueva descripción"
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *       400:
 *         description: Datos de tarea incorrectos
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error interno al actualizar
 */
router.put('/api/tasks/:id', authMiddleware, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     tags: [Tasks]
 *     summary: Eliminar tarea por ID
 *     description: Permite eliminar una tarea específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la tarea
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al eliminar la tarea
 */
router.delete('/api/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
