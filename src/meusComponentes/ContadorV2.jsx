import { useState } from "react";

export default function Contador(props) {
    const [valor, setValor] = useState(0); //hook useState = Permite que você use o state e outros recursos do React sem escrever uma classe.
    //Também permite que você informe um valor inicial para o estado. useState(valor);

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        if (valor > 0)
            setValor(valor - 1)
    }

    return ( // Return é o método render
        <div>
            <div className="visor">
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}