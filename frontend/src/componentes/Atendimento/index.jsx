import './Atendimento.css'

const Atendimento = (props) => {

    return (
        <>
            <div className='atendimento__top'>
                <hr />
            </div>
            <section className='atendimento'>
                <h2 className='atendimento__titulo'>
                    {props.titulo}
                </h2>
                <p className='atendimento__descricao'>
                    {props.descricao}
                </p>
                <ul className='atendimento__lista'>
                    <li className='atendimento__item'>Mais velocidade</li>
                    <li className='atendimento__item'>Mais atenção</li>
                    <li className='atendimento__item'>Mais economia</li>
                </ul>
            </section>
            <div className='atendimento__bottom'>
                <hr />
            </div>
        </>

    )
}

export default Atendimento