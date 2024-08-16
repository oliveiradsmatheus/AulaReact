import { Component } from "react";

export default class Data extends Component{

    constructor (props){
        super(); // Executa o construtor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }

    // Fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        this.dataAtual = new Date().toLocaleString();
    }

    // Fase de atualização
    componentDidUpdate(){
        console.log("O componente foi atualizado");
    }

    // Sobrescrita de método
    render(){
        return (
            <h1>{ this.props.texto || ""}{this.dataAtual}</h1>
        )
    }
}