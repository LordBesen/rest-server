const {response,request} = require('express');
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosGet = (req = request, res = response) => {

    const {q,nombre,apikey} = req.query;
    res.json({
  
        ok:true,
        msg:'GE T API controller',
        nombre
    });
  }
  const usuariosPut = (req, res = response) => {

    const id = req.params.id
    res.json({
  
        ok:true,
        msg:'PUT API controller',
        id
    });
  }
  const usuariosPost = async  (req, res = response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {


     return res.status(400).json(errors);
   }

    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    //verificar si el correo existe

    const existeEmail = await Usuario.findOne({correo : correo});
    if (existeEmail){
      return res.status(400).json({


        msg: 'El correo ya se encuentra registrado'
      })


    }


    //encriptar la contrase;a
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password,salt)

    //salvar la informacion del usuario.
    await usuario.save();
    res.json({
  
        ok:true,
        msg:'POST API controller',
        
        usuario,
       
    });
  }
  const usuariosDelete = (req, res = response) => {
    res.json({
  
        ok:true,
        msg:'DELETE API controller'
    });
  }
  const usuariosPatch = (req, res = response) => {
    res.json({
  
        ok:true,
        msg:'PATCH API controller'
    });
  }



  module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
  }