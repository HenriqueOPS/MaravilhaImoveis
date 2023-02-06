import api from "../../api";
import React from 'react';
import './tabela.css';
function update({post}){
  api.put('imovel/'+post._id,{
    
  })
}
function Tabela(){
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        api.get('imovel').then((response) => {
          setPost(response.data);
        });
      }, []);
      if (!post) return null;
      return(
        <>
        {post.map((post)=>(
          <div className="row">
            <input type='text' className="cel" placeholder={post.nome}></input>
            <input type='text' className="cel" placeholder={post.metragem}></input>
            <input type='text' className="cel" placeholder={post.localizacao}></input>
            <input type='text' className="cel" placeholder={post.adicionais}></input>
            <input type='text' className="cel" placeholder={post.preco}></input>
            <div className="cel">{post._id}</div>
            <button></button>
          </div>
        ))}
        </>
      )
}
export default Tabela