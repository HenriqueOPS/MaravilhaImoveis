import './admin.css' ;
import React,{Component} from 'react';
import api from '../api'
class Admin extends Component{
    constructor(props){
    super(props);
    this.state={
        nome:'ss'
    }
    this.mudanome=this.mudanome.bind(this);
    this.enviar=this.enviar.bind(this);
    }
    enviar(){
        api.post('imovel',{
         nome:this.state.nome   
        })
        console.log('tentei')
    }
    mudanome(e){
        let nomedigitado=e.target.value;
        this.setState({nome: nomedigitado});
        console.log(nomedigitado)
    }
    render(){
        return(
            <>
                <input type='text' 
                value={this.state.nome} 
                onChange={this.mudanome}></input>
                <button onClick={this.enviar}></button>
            </>
        )
    }
}
export default Admin