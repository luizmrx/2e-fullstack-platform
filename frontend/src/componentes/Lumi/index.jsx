import './Lumi.css'
import Imagem from '../Imagem'

const Lumi = (props) => {
    return (
        <section className='lumi'>
            <div className='lumi__info'>
                <h2 className='lumi__titulo'>
                    {props.titulo}
                </h2>
                <p className='lumi__descricao'>
                    {props.descricao}
                </p>
            </div>
            <Imagem caminho="/celular.svg" descricao="Celular mostrando uma conversa com a Lumi" classe="celular__lumi"/>
        </section>
    )
}

export default Lumi