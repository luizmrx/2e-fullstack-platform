import './Historia.css'
import Imagem from '../Imagem'
import LinkPersonalizado from '../LinkPersonalizado';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Historia = () => {
    return (
        <section className='historia'>

            <section className='historia__info'>
                <h2 className='historia__titulo'>
                    Conheça a nossa história
                </h2>
                <p className='historia__paragrafo'>
                    De uma ideia nascida dentro da USP para uma startup que ajuda brasileiros a economizar na conta de luz. A 2E conecta você às melhores ofertas de energia, com atendimento rápido, sem filas e preços que cabem no seu bolso.
                </p>
                <LinkPersonalizado destino="/sobre" texto="Saiba mais"/>
            </section>

            <Imagem caminho="/historia__home.jpg" descricao="Mesa com diversas pessoas discutindo ideias." classe="historia__home" />



        </section>
    )
}

export default Historia