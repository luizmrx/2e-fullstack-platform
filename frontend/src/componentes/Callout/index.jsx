import './Callout.css'

const Callout = (props) =>{
    return(
        <section className='callout'>
            <h2 className='callout__titulo'>
                {props.titulo}
            </h2>
            <p className='callout__mensagem'>
                {props.mensagem}
            </p>
        </section>
    )
}

export default Callout