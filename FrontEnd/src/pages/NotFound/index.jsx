import React from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho/Cabecalho'

const NaoAchado = () => {
    return (
        <div>
            <h1>404 PAGINA NÃO ENCONTRADA</h1>
            <p>Volte para o inicio <Link to={'/'} >Voltar</Link></p>
        </div>

    )
}

export default NaoAchado