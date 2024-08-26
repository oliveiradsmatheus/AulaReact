import { Component } from "react";

export default class Contador extends Component {
    constructor(props) {
        super();
        this.state = { valor: 0 };
    }

    decrementar() {
        if (this.state.valor > 0)
            this.setState({
                valor: this.state.valor - 1
            });
    }

    incrementar() {
        let valorAnterior = this.state.valor;
        let valorNovo = valorAnterior + 1;
        this.setState({
            valor: valorNovo
        })
    }

    render() {
        return (
            <div>
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={() => { this.decrementar(); }}>-</button>
                    <button onClick={() => { this.incrementar(); }}>+</button>
                </div>
            </div>
        );
    }
}
