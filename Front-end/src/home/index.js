import './home.css';
import pesquisar from '../images/pesquisar.png';
import seta from '../images/setabaixo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Imoveis from './imoveis/imoveis';
import Geraimoveis from './imoveis/geradorimoveis';
function Home() {
  const exemplo={
    nome:'apartamento',
    metragem:'333',
    localizacao:'avenida seilá',
    adicionais:'banheiro quarto',
    preco:'500.000',
}
  return (
    <>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>
      <header>
        <div className="titulo">Maravilha <br></br>Imóveis</div>
        <div className="caminhos">
         <AnchorLink href='#abaixo' className='texto'>Comprar</AnchorLink>
          <p>Anunciar </p>
          <p>Contatos</p>
        </div>
      </header>
      <div className="centro" >
          <p>O Imóvel dos seus sonhos<br></br>
a um click</p>
          <div className="busca">
            <div className="itembusca1">Cidade<div><img src={seta}></img></div></div>
            <div className="itembusca1">Bairro<div><img src={seta}></img></div></div>
            <div className="itembusca1">Tipo<div><img src={seta}></img></div></div>
            <div className="icone"><img src={pesquisar}></img></div>
          </div>
       
         

      </div>
     <div className="abaixo" id='abaixo'>
        <div className="comprar">
          <h1>Comprar</h1>
          <div className='comprar-filtros'>
            <div className="itembusca2">Cidade<div><img src={seta}></img></div></div>
            <div className="itembusca2">Bairro<div><img src={seta}></img></div></div>
            <div className="itembusca2">Tipo<div><img src={seta}></img></div></div>
            <div className='preco'>
              <p>De</p><div className='preco-de'></div><p>Até</p>
              <div className='preco-de'></div>
            </div>
          </div>
        </div>
        <div className="imoveis">
           <Imoveis 
           nome={exemplo.nome}
           metragem={exemplo.metragem}
           localizacao={exemplo.localizacao}
           adicionais={exemplo.adicionais}
           preco={exemplo.preco}/>
           <Geraimoveis/>
        </div>
     </div>
    </>
  );
}
export default Home;
