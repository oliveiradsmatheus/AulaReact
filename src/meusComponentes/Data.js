import { Component } from "react";

export default class Data extends Component{

    constructor (props){
        super(); // Executa o construtor do pai
        this.props = props;
        this.state = {dataAtual: new Date().toLocaleString()};
    }

    pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 * 1000));
        const data = new Date(milisegundos);
        return data;
    }

    // Fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        // Não é permitido atualizar o estado do componente de forma direta (this.state = ...)
        this.setState({dataAtual: new Date().toLocaleString()});
    }

    // Fase de atualização
    componentDidUpdate(){
        console.log("O componente foi atualizado.");
        setTimeout(()=>{
            this.setState({
                dataAtual: this.pegaDataDe(this.props.timeZone).toLocaleString()
            });
        },1000);
    }

    // Sobrescrita de método
    render(){
        return (
            <h1>{ this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}