import './CaixaTexto.css'

const CaixaTexto = (props) =>{
    return(
        <input type={props.tipo} placeholder={props.placeholder} className='caixa__texto' id={props.placeholder} required={props.obrigatorio} onChange={props.mudanca} value={props.valor} maxLength={props.maximo} inputMode={props.modo}
        />
    )
}

export default CaixaTexto