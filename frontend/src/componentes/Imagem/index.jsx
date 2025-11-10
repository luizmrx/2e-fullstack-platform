import './Imagem.css'

const Imagem = (props) =>{
    return(
        <>
        {props.caminho && (
            <img src={`/static${props.caminho}`} alt={props.descricao} className={props.classe}/>
        //<img src={`${props.caminho}`} alt={props.descricao} className={props.classe}/>
        )}
        {props.caminhoArtigo && (
            <img src={props.caminhoArtigo} className={props.classe}/>
        )}
        </>
        
        
    )
}

export default Imagem