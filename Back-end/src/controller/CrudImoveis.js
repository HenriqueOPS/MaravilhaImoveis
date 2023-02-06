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
    async index(req,res){
        const imoveis = await Imoveis.find();
        return res.json(imoveis)
    }
    async update(req,res){
        const {nome}=req.file;
        const {imovel_id}=req.params;
        const {metragem,localizacao,adicionais,preco}=req.body;
        const imovel= await Imoveis.updateOne({_id:imovel_id},{nome,
            metragem,
            localizacao,
            adicionais,
            preco});
    }
}
export default new CrudImoveis