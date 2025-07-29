import './Header.css'
import Botao from '../Botao'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [aberto, setAberto] = useState(false);
    const alternarMenu = () => {
        setAberto((atual) => !atual);
    };

    return (
        <header>
            <nav className='cabecalho'>
                <div className='cabecalho__opcoes'>
                    <button onClick={alternarMenu} className='cabecalho__botao'>
                        <img src="/menu__hamburguer.svg" alt="Menu hamburguer" />
                    </button>
                    {aberto && (
                        <>
                            <div className="overlay" onClick={alternarMenu}></div>
                            <ul className='cabecalho__links'>
                                <li className=''>
                                    <button onClick={alternarMenu} className='cabecalho__botao cabecalho__link'
                                    ><img src="/menu__hamburguer.svg" alt="Menu hamburguer" /></button>
                                </li>
                                <li className=''>
                                    <Link className='cabecalho__link' to={"/"}>
                                        <button onClick={alternarMenu} className='cabecalho__botao__suspenso cabecalho__link'
                                        >Inicio</button>
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link className='cabecalho__link' to={"/sobre"}>
                                        <button onClick={alternarMenu} className='cabecalho__botao__suspenso cabecalho__link'
                                        >Sobre</button>
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link className='cabecalho__link' to={"/seguranca"}>
                                        <button onClick={alternarMenu} className='cabecalho__botao__suspenso cabecalho__link'
                                        >Segurança</button>
                                    </Link>
                                </li>
                            </ul>
                        </>
                    )}
                    <Link className='' to={"/"}>
                        <img src="/logo__branco.svg" alt="Logo da 2E" />
                    </Link>
                </div>
                <div className='cabecalho__botao'>
                    <Botao texto="Contato" />
                </div>
            </nav>
        </header>
    )
}

export default Header