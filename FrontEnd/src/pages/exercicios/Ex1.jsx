import React, { useState } from 'react'
import Cabecalho from '../../components/cabecalho/Cabecalho'
import Header from '../../components/header/Header'

export default function Ex1() {

    let [total, setTotal] = useState('00,00')
    let [pedido, setPedido] = useState(0)
    let [desconto, setDesconto] = useState(0)


    function calcular() {
        let resutado = Number(pedido - desconto);
        setTotal(resutado)
    }




    return (
        <div className='container_exercicio1'>
            <Header />
            <Cabecalho titulo={"Exercício 01 - Cupom de desconto"} />
            <div className="container_descricao">
                <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
            </div>
            <br />
            <div>
                <label>Informa o valor do pedido</label><br />
                <input type="number" placeholder='0' onChange={(e) => setPedido(e.target.value)} />
                <label>Informe o valor do cupom</label> <br />
                <input type="number" placeholder='0' onChange={(e) => setDesconto(e.target.value)} />
                <button onClick={calcular} >Executar</button>
            </div>
            <div className="resultado">
                <p>Resultado: O total é R${total}</p>
            </div>


        </div>
    )
}
