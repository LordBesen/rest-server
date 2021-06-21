const { response } = require("express");
const Usuario =  require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generarJWT");





const login = async(req, res = response) => {

    const { correo,password} = req.body;


    try {



        //verificar si mail existe

        const usuario =  await Usuario.findOne({correo});
        if (!usuario) {

         return res.status(400).json({


               msg:'Usuario/password no son correctos - correo',
            });
   }



        //verificar estado del usuario
        if (usuario.estado === false) {

            return res.status(400).json({
   
   
                  msg:'Usuario no se encuentra en la base de datos',
               });
      }



        //verificar la contrase;a
      const  validPassword = bcryptjs.compareSync(password,usuario.password)
        if (!validPassword) {

            return res.status(400).json({


                msg:'Usuario/password no son correctos - password',
             });


        }


        

        // generar el jwt 

        const token =  await generarJWT(usuario.id);

        res.json({

            msg: 'Login OK',
            usuario,
            token
            
        })
    



    } catch (error) {
        console.log(error);

        return res.status(500).json({


            msg: ' Algo salio mal. Hable con el administrador'
        })
    }

    

}

module.exports = {


    login
}