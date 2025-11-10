import './Justificativas.css'
import Imagem from '../Imagem'

const Justificativas = (props) => {
    return (
        <section className='justificativas'>
            <h2 className='justificativas__titulo'>
                {props.titulo}
            </h2>
            <div className='justificativas__container'>
                {props.itens.map((item, index) => {
                    return (
                        <div className='justificativas__item' key={item}>
                            <Imagem caminho="/sinalOK.svg" descricao="Sinal OK" />
                            <p className='justificativas__paragrafo'>{item}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Justificativas