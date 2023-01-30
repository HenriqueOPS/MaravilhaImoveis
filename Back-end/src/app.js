import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
class App{
    constructor(){

        this.server=express();
        mongoose.set("strictQuery", false);
        mongoose.connect('mongodb://Dev:123@ac-02sv7g8-shard-00-00.hmyplgx.mongodb.net:27017,ac-02sv7g8-shard-00-01.hmyplgx.mongodb.net:27017,ac-02sv7g8-shard-00-02.hmyplgx.mongodb.net:27017/?ssl=true&replicaSet=atlas-dx86w0-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(cors())
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }

}
export default new App().server