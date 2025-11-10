import Mensagem from '../Mensagem'
import './Parceiros.css'
import Imagem from '../Imagem'

const Parceiros = () => {
    return (
        <section className='parceiros'>
            <h2 className='parceiros__titulo'>
                Conheça  o nosso ecossistema de parceiros.
            </h2>
            <div className='parceiros__container'>
                <div className='parceiros__container__logo'>
                    <Imagem caminho="/aws__logo.svg" descricao="Logo AWS"/>
                </div>
                <div className='parceiros__container__logo'>
                    <Imagem caminho="/origo__logo.svg" descricao="Logo Origo"/>
                </div>
                <div className='parceiros__container__logo'>
                    <Imagem caminho="/openai__logo.svg" descricao="Logo OpenAI"/>
                </div>
            </div>
        </section>
    )
}

export default Parceiros