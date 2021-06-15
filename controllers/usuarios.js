const {response,request} = require('express');


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
  const usuariosPost = (req, res = response) => {

    const {nombre,edad} = req.body;
    res.json({
  
        ok:true,
        msg:'POST API controller',
        nombre,
       
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