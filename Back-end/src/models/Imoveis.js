import {model,Schema} from "mongoose";
const ImoveisSchema=new Schema({
    nome:String,
    metragem:String,
    localizacao:String,
    adicionais:String,
    preco:String,
});
export default model('Imoveis',ImoveisSchema);