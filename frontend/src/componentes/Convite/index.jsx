import './Convite.css'
import Mensagem from '../Mensagem'
import { verificaLargura } from '../Utils'

const Convite = () =>{

    const largura = verificaLargura();
    const grandeLargura = largura >= 768;

    return(
        <section className='convite'>
            <Mensagem tituloSuperior="Pronto para economizar com segurança?" paragrafoInterno="Fale com a Lumi agora mesmo e veja como é simples, gratuito e protegido do início ao fim." botao="Contato" classeBotaoInterno={grandeLargura ? "botao__grande" : "" }/>
        </section>
    )
} 

export default Convite