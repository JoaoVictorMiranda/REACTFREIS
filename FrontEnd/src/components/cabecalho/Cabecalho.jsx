import React from 'react'
import './Cabecalho.scss'
import { Link } from 'react-router-dom'



export default function Cabecalho({ titulo }) {
    return (
        <div className='container_cabecalho'>
            <div className='Voltar'>
                <Link to={"/"} ><i class="fa-solid fa-arrow-left"></i></Link>

            </div>
            <div className="titulo">
                <h1>{titulo}</h1>
            </div>


        </div >
    )
}
