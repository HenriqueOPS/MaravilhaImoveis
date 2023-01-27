import background from '../../images/background.jpg';
import './imoveis.css';
function Imoveis({nome,metragem,localizacao,adicionais,preco}){
    return(
        <div className='imovel'>
        <img src={background}></img>
        <div className='imoveis-descricao'> 
            <h3>{nome},{metragem}<sup>2</sup></h3>
            <h4>{localizacao}</h4>
            <h5>{metragem}<sup>2</sup> {adicionais}</h5>
            <h2>R${preco}</h2>
            <div>
              Mais informações
            </div>
        </div>
    </div>
    )
}
export default Imoveis;