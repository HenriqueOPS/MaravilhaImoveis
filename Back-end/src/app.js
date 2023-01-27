import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
class App{
    constructor(){
        this.server=express();
        mongoose.set("strictQuery", false);
        mongoose.connect('mongodb+srv://Dev:123@maravilha.hmyplgx.mongodb.net/test',{

            useUnifiedTopology:true,
        })
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }

}
export default new App().server