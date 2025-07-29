import './Newsletter.css'
import Formulario from '../Formulario'

const Newsletter = () =>{
    return(
        <section className='newsletter'>
            <h2 className='newsletter__titulo'>
                 Fique por dentro das melhores oportunidades 
            </h2>
            <p className='newsletter__paragrafo'>
                Receba atualizações sobre o mercado de energia, dicas práticas para economizar e ofertas exclusivas direto no seu e-mail. 
            </p>
            <Formulario/>
            <p className='newsletter__aviso'>
                <img src="/cadeado.svg" alt="Cadeado" className='img__cadeado'/>
                Suas informações estão protegidas com criptografia e em total conformidade com a LGPD.
            </p>
        </section>
    )
}

export default Newsletter