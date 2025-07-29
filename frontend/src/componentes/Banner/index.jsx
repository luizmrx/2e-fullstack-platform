import Mensagem from '../Mensagem'
import './Banner.css'
import Botao from '../Botao'

const Banner = () =>{
    return(
        <main className='principal'>
            <div className='luz__roxa'></div>
            <Mensagem titulo="Economize na sua conta de luz pelo WhatsApp"/>
             <div className="imagem-wrapper">
                <div className="luz__verde"></div>
                <img src="/celular.svg" alt="Celular demonstrando a facilidade no processo" />
            </div>
            <Botao texto="Comece agora"/>
            <p className='principal__paragrafo'>Plataforma segura, intuitiva e pensada para trazer os melhores descontos na sua conta.</p>
        </main>
    )
}
 
export default Banner