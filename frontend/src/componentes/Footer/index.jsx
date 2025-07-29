import Mensagem from '../Mensagem'
import './Footer.css'

const Footer = () =>{
    return(
        <footer className='rodape'>
            <h2 className='rodape__titulo'>
                Na 2E, facilitamos o caminho entre você e os serviços que realmente importam.
            </h2>
            <Mensagem imagem="/logo__branco.svg" descricao="Com o apoio da Lumi — nossa inteligência artificial especializada — analisamos suas informações para conectar você com empresas que oferecem descontos reais e vantagens exclusivas, sempre com total segurança, transparência e sem enrolação.
            
            
            Entre em contato email@encontraeconomia.com.br"/>
            <div className='redes'>
                <a href="#">
                    <img src="instagram.svg" alt="Instagram" />
                </a>
                <a href="#">
                    <img src="/whatsapp.svg" alt="Whatsapp" />
                </a>
                <a href="#">
                    <img src="/linkedin.svg" alt="Linkedin" />
                </a>
            </div>
            <hr />
            <p className='rodape__sobre'>© 2025 EncontraEconomia Ltda. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer