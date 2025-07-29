import './Conversar.css'
import Mensagem from '../Mensagem'
import Botao from '../Botao'

const Conversar = () =>{
    return(
        <section className='conversar'>
            <Mensagem titulo="Converse com a Lumi!" paragrafo="Basta escanear o QR Code ou clicar no botão abaixo para iniciar uma conversa com a Lumi. Ela vai entender seu perfil e te mostrar os melhores descontos para a sua conta de energia — direto no seu WhatsApp."/>
            <img src="/qrCode.svg" alt="QR Code do Whatsapp" />
            <Botao texto= "Conversar"/>
        </section>
    )
}

export default Conversar