//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {body} = require("express-validator");

//**!      REQUIRE       */
const userController = require('../controllers/userController')

//**!     VALIDACIONES   */
const validationregister = [
    body('nombre').notEmpty().withMessage('Debes completar este campo'),
    body('apellido').notEmpty().withMessage('Debes completar este campo'),
    body('email').isEmail().withMessage('Debes completar este campo'),
    body('contraseña').notEmpty().withMessage('Debes completar este campo'),
    body('imagenUsuario').notEmpty().withMessage('Debes completar este campo')
];

//**!     MULTER        */
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "public/images/users");
    },
    filename:(req, file, cb)=>{
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const upload = multer({storage:storage});

//**!      CONTROLLERS    */

/* ---- LOGIN ---- */
router.get('/login',userController.login);
<<<<<<< HEAD
router.post('/login',userController.login);
=======
/* router.post('/login',userController.processLogin); */
>>>>>>> a4de65a2e64b138fcd7a99c952706bbd931cbd15

/* ---- REGISTER ---- */
router.get('/register',userController.register);
router.post('/register', upload.single('imagenUsuario'), /* validationregister , */userController.processRegister);

/* ---- FORGOT ---- */
router.get('/forgot',userController.forgot);

module.exports = router;
