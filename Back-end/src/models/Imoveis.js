import {model,Schema} from "mongoose";
const ImoveisSchema=new Schema({
    nome:String,
});
export default model('Imoveis',ImoveisSchema);