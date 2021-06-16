const express = require('express');
const { dbConnection } = require('../database/config');


class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this. ConectarDB();
        


        this.middlewares();



        this.routes();








    }

    async ConectarDB() {

        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'));

        this.app.use(express.json());



    }

    routes(){

       this.app.use(this.usuariosPath,require('../routes/usuarios'))


    }


    listen() {
    this.app.listen( this.port,() => {

        console.log('Escuchando puerto', this.port )
    })
}


}

module.exports = Server;