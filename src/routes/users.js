var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados con usuarios
 */
/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Users]
 *     description: Crea un nuevo usuario con un nombre de usuario, correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Juan
 *               email:
 *                 type: string
 *                 example: juan@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 6123abc456def78901234a56
 *                 username:
 *                   type: string
 *                   example: Juan
 *                 email:
 *                   type: string
 *                   example: juan@example.com
 *       400:
 *         description: Todos los campos son requeridos.
 *       500:
 *         description: Error al crear el usuario.
 */
router.post('/create', controller.create);

/**
 * @swagger
 * /users/find:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     description: Devuelve una lista con todos los usuarios registrados en el sistema.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 6123abc456def78901234a56
 *                   username:
 *                     type: string
 *                     example: Juan
 *                   email:
 *                     type: string
 *                     example: juan@example.com
 *       404:
 *         description: No se encontraron usuarios.
 *       500:
 *         description: Error al consultar los usuarios.
 */
router.get('/find', controller.findAll);

/**
 * @swagger
 * /users/find/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Users]
 *     description: Devuelve la información de un usuario específico usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Información del usuario obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 6123abc456def78901234a56
 *                 username:
 *                   type: string
 *                   example: Juan
 *                 email:
 *                   type: string
 *                   example: juan@example.com
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al consultar el usuario.
 */
router.get('/find/:id', controller.find);

/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     tags: [Users]
 *     description: Actualiza los datos de un usuario existente utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Juan Actualizado
 *               email:
 *                 type: string
 *                 example: juan_actualizado@example.com
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 6123abc456def78901234a56
 *                 username:
 *                   type: string
 *                   example: Juan Actualizado
 *                 email:
 *                   type: string
 *                   example: juan_actualizado@example.com
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al actualizar el usuario.
 */
router.put('/update/:id', controller.update);

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags: [Users]
 *     description: Elimina un usuario del sistema utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete('/delete/:id', controller.delete);

module.exports = router;
