import './home.css';
import pesquisar from '../images/pesquisar.png';
import seta from '../images/setabaixo.svg';
function Home() {
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
          <p>Comprar</p>
          <p>Anunciar</p>
          <p>Contatos</p>
        </div>
      </header>
      <div className="centro" >
          <p>O Imóvel dos seus sonhos<br></br>
a um click</p>
          <div className="busca">
            <div className="itembusca">Cidade<div><img src={seta}></img></div></div>
            <div className="itembusca">Bairro<div><img src={seta}></img></div></div>
            <div className="itembusca">Tipo<div><img src={seta}></img></div></div>
            <div className="icone"><img src={pesquisar}></img></div>
          </div>
       
         

      </div>
     
    </>
  );
}

export default Home;
