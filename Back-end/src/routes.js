import { Router } from "express";
import CrudImoveis from "./controller/CrudImoveis";
const routes = new Router();
routes.post('/imovel',CrudImoveis.store)
routes.get('/',(req,res)=>{
    return res.json({ok:true})
})
routes.get('/imovel',CrudImoveis.index)
export default routes