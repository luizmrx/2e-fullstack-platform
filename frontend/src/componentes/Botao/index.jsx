import './Botao.css'

const Botao = (props) => {
    return (
        <>
            <a href={props.endereco || "/"} className={`botao ${props.classe}`}>{props.texto}</a>
        </>
    )
}

export default Botao