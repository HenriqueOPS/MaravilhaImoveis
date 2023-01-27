import Imoveis from '../models/Imoveis'
class CrudImoveis{
    store(req,res){
        const {nome} = req.body;
        let imovel = Imoveis.create({nome});
        return  res.json(imovel)
    }
}