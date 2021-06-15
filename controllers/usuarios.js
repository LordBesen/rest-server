const {response} = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
  
        ok:true,
        msg:'GE T API controller'
    });
  }
  const usuariosPut = (req, res = response) => {
    res.json({
  
        ok:true,
        msg:'PUT API controller'
    });
  }
  const usuariosPost = (req, res = response) => {
    res.json({
  
        ok:true,
        msg:'POST API controller'
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