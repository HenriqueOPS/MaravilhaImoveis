import Imoveis from '../models/Imoveis'
class CrudImoveis{
    async store(req,res){
        const {nome,
        metragem,
        localizacao,
        adicionais,
        preco} = req.body;
        let imovel = await Imoveis.create({nome,metragem,localizacao,adicionais,preco});
        console.log('acessada')
        return  res.json(imovel)
    }
}
export default new CrudImoveis