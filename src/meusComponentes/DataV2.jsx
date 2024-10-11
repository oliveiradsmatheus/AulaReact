import { useEffect, useState } from "react";

//useEffect é um hook que permite gerenciar o ciclo de vida de um componente quando ele é desenvolvido utilizando a sintaxe JSX.
/*
useEffect (function () {  <- willUnmount
}, [] didMount // Se a lista estiver vazia, executa uma vez só)
}, [item,item] didUpdate // Esta função será executada quando um componente for atualizado.
*/

export default function DataV2(props) {
    const [dataAtual, setDataAtual] = useState(new Date().toLocaleString());

    function pegaDataDe(timeZone) {
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 * 1000));
        const data = new Date(milisegundos);
        return data;
    }

    // Exemplo de didMount
    useEffect(() => {
        setDataAtual(new Date().toLocaleString());
        return () => {} // willUnmount
    }, []);

    // Exemplo de didUpdate
    useEffect(() => {
        setTimeout(() => {
            setDataAtual(pegaDataDe(props.timeZone).toLocaleString());
            },1000);
    }, [dataAtual]) // Coloca na lista de atualização aquilo que deve ser observado.

    return (
        <h1>{props.texto || ""}{dataAtual}</h1>
    );
}