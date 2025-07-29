import Mensagem from '../Mensagem'
import './Parceiros.css'

const Parceiros = () => {
    return (
        <section className='parceiros'>
            <h2 className='parceiros__titulo'>
                Conheça  o nosso ecossistema de parceiros.
            </h2>
            <div className='parceiros__container'>
                <div className='parceiros__container__logo'>
                    <img src="/aws__logo.svg" alt="Logo AWS" />
                </div>
                <div className='parceiros__container__logo'>
                    <img src="/origo__logo.svg" alt="Logo Origo" />
                </div>
                <div className='parceiros__container__logo'>
                    <img src="/openai__logo.svg" alt="Logo OpenAI" />
                </div>
                {/* <Mensagem parceiro="src/assets/aws__logo.svg" parceiroTexto="Logo AWS" />
                <Mensagem parceiro="src/assets/origo__logo.svg" parceiroTexto="Logo Origo" />
                <Mensagem parceiro="src/assets/openai__logo.svg" parceiroTexto="Logo OpenAI" /> */}
            </div>
        </section>
    )
}

export default Parceiros