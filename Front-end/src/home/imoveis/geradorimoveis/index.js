import api from '../../../api'
import React from 'react'
import Imoveis from '../imoveis';
function Geraimoveis(){
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        api.get('imovel').then((response) => {
          setPost(response.data);
        });
      }, []);
      if (!post) return null;

   return(
    <div>
        {post.map((post)=>(
             <Imoveis 
             nome={post.nome}
             metragem={post.metragem}
             localizacao={post.localizacao}
             adicionais={post.adicionais}
             preco={post.preco}/>
        ))}
    </div>
   )
   
}
export default Geraimoveis;