import './Justificativas.css'

const Justificativas = (props) => {
    return (
        <section className='justificativas'>
            <h2 className='justificativas__titulo'>
                {props.titulo}
            </h2>
            {props.itens.map((item, index) => {
                return <div className='justificativas__container' key={item}>
                    <img src="/sinalOK.svg" alt="Sinal OK" />
                    <p className='justificativas__paragrafo'>{item}</p>
                </div>
            })}
        </section>
    )
}

export default Justificativas