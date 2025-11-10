import './Banner.css'
import Botao from '../Botao'
import { useLocation } from 'react-router-dom'

const Banner = (props) => {

    const pagAtual = useLocation().pathname;

    return (
        <main className={`principal ${props.nao__encontrado || ""} ${pagAtual === "/" ? "background__home" : ""}`}>

            <div className='principal__info'>
                <h1 className='titulo'>{props.titulo}</h1>
                <p className='paragrafo'>{props.paragrafo}</p>
            </div>
            <Botao endereco={"https://wa.me/5511976551150?text=Ol%C3%A1!%20Quero%20economizar%20na%20minha%20conta%20de%20luz."} texto={props.botao} classe="botao__grande" />
            <p className='descricao'>{props.descricao}</p>

        </main>
    )
}

export default Banner