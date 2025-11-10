import './Mensagem.css'
import Botao from '../Botao'
import Imagem from '../Imagem'

const Mensagem = (props) => {
    return (
        <div className={props.classeContainer ? "container__banner" : "container"}>
            {props.imagemSuperior && (
                <Imagem caminho={props.imagemSuperior} descricao={props.descricaoImagemSuperior} classe='container__imagem' />
            )}
            {props.tituloSuperior && (
                <h2 className='container__titulo'>{props.tituloSuperior}</h2>
            )}
            <div className='caixa'>
                {props.tituloInterno && (
                    <p className='caixa__titulo'>
                        {props.tituloInterno}
                    </p>
                )}
                {props.paragrafoInterno && (
                    <p className='caixa__paragrafo'>{props.paragrafoInterno}</p>
                )}
                {props.imagemInterna && (
                    <Imagem caminho={props.imagemInterna} descricao={props.descricaoImagemInterna} classe='caixa__imagem' />
                )}
                {props.botao && (
                    <div className='caixa__botao'>
                        <Botao texto={props.botao} classe={props.classeBotaoInterno}/>
                    </div>
                )}
            </div>
            {props.botaoExterno && (
                <div className='caixa__botao__externo'>
                    <Botao texto={props.botaoExterno} classe="botao__grande__banner"/>
                </div>
            )}
        </div>

    ) 
}

export default Mensagem