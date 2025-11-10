import './Header.css'
import Botao from '../Botao'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Imagem from '../Imagem'
import {sublinhaLink} from '../Utils'
 
const Header = () => {

    const [aberto, setAberto] = useState(false);
    const alternarMenu = () => {
        setAberto((atual) => !atual);
    };

    return (
        <header>
            <nav className='cabecalho'>
                <div className='cabecalho__esquerda'>

                    <button onClick={alternarMenu} className='cabecalho__menu__hamburguer'>
                        <Imagem caminho="/menu__hamburguer.svg" descricao="Menu hamburguer" />
                    </button>

                    {aberto && (<div className="overlay" onClick={alternarMenu}></div>)}
                    <ul className={`menu__suspenso ${aberto ? "aberto" : ""}`}>

                        <li className='menu__suspenso__item'>
                            <button onClick={alternarMenu} className='cabecalho__botao'>
                                <Imagem caminho="/menu__hamburguer.svg" descricao="Menu hamburguer" classe="icone__menu__suspenso"/>
                                <Imagem caminho="/logo__branco__navbar.svg" descricao="Logo da 2E" classe="logo__menu__suspenso"/>
                            </button>
                        </li>

                        <li className='menu__suspenso__item'>
                            <Link to={"/"} onClick={alternarMenu} className='cabecalho__botao'>
                                {/* <Imagem caminho="/home.svg" descricao="Ícone da home" classe="icone__menu" /> */}
                                <i className="fa-solid fa-house icone__menu__especial"></i>
                                {sublinhaLink("/", "Início")}
                            </Link>
                        </li>

                        <li className='menu__suspenso__item'>
                            <Link to={"/sobre"} onClick={alternarMenu} className='cabecalho__botao'>
                                {/* <Imagem caminho="/sobre.svg" descricao="Ícone sobre a empresa" classe="icone__menu" /> */}
                                <i className="fa-solid fa-seedling icone__menu__especial"></i>
                                {sublinhaLink("/sobre", "Sobre")}
                            </Link>
                        </li>

                        <li className='menu__suspenso__item'>
                            <Link to={"/artigos"} onClick={alternarMenu} className='cabecalho__botao'>
                                {/* <Imagem caminho="/sobre.svg" descricao="Ícone de artigos" classe="icone__menu" /> */}
                                <i className="fa-regular fa-newspaper icon icone__menu__especial"></i>
                                {sublinhaLink("/artigos", "Artigos")}
                            </Link>
                        </li>

                        <li className='menu__suspenso__item'>
                            <Link to={"/faq"} onClick={alternarMenu} className='cabecalho__botao'>
                                {/* <Imagem caminho="/cadeadoBranco.svg" descricao="Ícone do cadeado" classe="icone__menu" /> */}
                                <i className="fa-regular fa-circle-question icone__menu__especial"></i>
                                {sublinhaLink("/faq", "FAQ")}
                            </Link>
                        </li>

                    </ul>

                    <Link to={"/"} className='navbar__home'>
                        <Imagem caminho="/logo__branco__navbar.svg" descricao="Logo da 2E" />
                    </Link>

                </div>

                <div className='cabecalho__direita'>
                    <Botao texto="Contato" endereco={"https://wa.me/5511976551150?text=Ol%C3%A1!%20Quero%20economizar%20na%20minha%20conta%20de%20luz."}/> 
                </div>

            </nav>
        </header>
    )
}

export default Header