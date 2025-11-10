import Mensagem from '../Mensagem'
import './Etapas.css'
import {verificaLargura} from '../Utils'

const Etapas = (props) =>{
    
    const grandeLargura = verificaLargura(768);

    return(
        <section className='etapas'>
            <h2 className='etapas__titulo'>
                {props.titulo}
            </h2>
            {props.itens.map( (item, index) =>{

                if(grandeLargura){
                    if(index%2 === 0){
                        const item2 = props.itens[index+1];

                        return (
                            <div key={`${item.titulo} ${item2 ? item2.titulo : ""}`} className='etapas__itens'>
                                <Mensagem key={item.titulo} tituloInterno={item.titulo} paragrafoInterno={item.paragrafo} imagemSuperior={item.imagem} descricaoImagemSuperior={item.textoAlternativo}/>
                                {item2 && <Mensagem key={item2.titulo} tituloInterno={item2.titulo} paragrafoInterno={item2.paragrafo} imagemSuperior={item2.imagem} descricaoImagemSuperior={item2.textoAlternativo}/>}
                            </div>
                        )
                    }
                    
                }else{
                    return <Mensagem key={item.titulo} tituloInterno={item.titulo} paragrafoInterno={item.paragrafo} imagemSuperior={item.imagem} descricaoImagemSuperior={item.textoAlternativo}/>
                }
                
            })}
        </section>
    )
}
 
export default Etapas