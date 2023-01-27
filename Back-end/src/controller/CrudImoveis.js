import Imoveis from '../models/Imoveis'
class CrudImoveis{
    async store(req,res){
        const {nome} = req.body;
        let imovel = await Imoveis.create({nome});
        console.log('acessada')
        return  res.json(imovel)
    }
}
export default new CrudImoveis