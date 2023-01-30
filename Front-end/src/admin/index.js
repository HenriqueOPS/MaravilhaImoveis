import './admin.css' ;
import React,{Component} from 'react';
import api from '../api'
class Admin extends Component{
    constructor(props){
    super(props);
    this.state={
        nome:'nome',
        metragem:'metragem',
        localizacao:'localizacao',
        adicionais:'adicionais',
        preco:'preco',
    }
    this.mudanome=this.mudanome.bind(this);
    this.enviar=this.enviar.bind(this);
    this.mudametragem=this.mudametragem.bind(this);
    this.mudalocalizacao=this.mudalocalizacao.bind(this);
    this.mudaadicionais=this.mudaadicionais.bind(this);
    this.mudapreco=this.mudapreco.bind(this);
    }
    enviar(){
        api.post('imovel',{
         nome:this.state.nome ,
         metragem:this.state.metragem,
         localizacao:this.state.localizacao,
         adicionais:this.state.adicionais,
         preco:this.state.preco,  
        })
        console.log('tentei')
    }
    mudanome(e){
        let nomedigitado=e.target.value;
        this.setState({nome: nomedigitado});
    }
    mudametragem(e){
        let metragemdigitada=e.target.value;
        this.setState({metragem:metragemdigitada});
    }
    mudalocalizacao(e){
        let localizacaodigitada=e.target.value;
        this.setState({localizacao:localizacaodigitada});
    }
    mudaadicionais(e){
        let adicionaisdigitado=e.target.value;
        this.setState({adicionais:adicionaisdigitado});
    }
    mudapreco(e){
        let precodigitado=e.target.value;
        this.setState({preco:precodigitado});
    }
    render(){
        return(
            <>
                <input type='text' 
                value={this.state.nome} 
                onChange={this.mudanome}></input>
                <input type='text' 
                value={this.state.metragem} 
                onChange={this.mudametragem}></input>
                <input type='text' 
                value={this.state.localizacao} 
                onChange={this.mudalocalizacao}></input>
                <input type='text' 
                value={this.state.adicionais} 
                onChange={this.mudaadicionais}></input>
                <input type='text' 
                value={this.state.preco} 
                onChange={this.mudapreco}></input>
                <button onClick={this.enviar}></button>
            </>
        )
    }
}
export default Admin