const {Router} = require('express');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');

const {usuariosGet,
         usuariosPut,
         usuariosPost,
          usuariosDelete,
         usuariosPatch} = require('../controllers/usuarios')


const router = Router();
router.get('/',usuariosGet );

router.put('/:id',usuariosPut)
router.post('/',[
   check('nombre', 'el nombre es obligatorio').not().notEmpty(),
   check('password', 'el password debe tener mas de 6 letras').isLength({min: 6}),
   check('correo', 'el correo no es valido').isEmail(),
   check('rol', 'no es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
   validarCampos

] , usuariosPost)
router.delete('/', usuariosDelete)
router.patch('/', usuariosPatch)

module.exports = router;