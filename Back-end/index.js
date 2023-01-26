const express=require('express');
const fileupload=require('express-fileupload');
const cors=require('cors');
const app=express();
var path=require('path');
const port=5000;
app.use(express.json());
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname,"temp")
}));
app.use(cors());
app.get('/noticias',(req,res)=>{
    res.json([{'titu':'122'},{'titu':'1223'},{'titu':'2123'}]);
})
app.listen(port,()=>{
    console.log('rodando na porta 5000....')
})