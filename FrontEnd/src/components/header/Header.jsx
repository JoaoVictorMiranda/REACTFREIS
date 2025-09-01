import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logoFrei from '../../assets/logoFrei.png'

const Header = () => {
    return (
        <div className='container_header'>
            <div className='container_logo' >
                <img src={logoFrei} alt="Logo do FREI" />
                <h2>React FreiS</h2>
            </div>
            <div className='container_links'>
                <ul>
                    <li> <Link to={'/'} >Inicio</Link></li>
                    <li><Link to={'/sobre'} >Sobre</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header