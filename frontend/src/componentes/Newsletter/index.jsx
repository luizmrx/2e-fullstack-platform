import './Newsletter.css'
import Formulario from '../Formulario'
import Imagem from '../Imagem'

const Newsletter = () => {
    return (
        <>
            <div className='newsletter__top'>
                <hr />
            </div>
            <section className='newsletter'>
                <h2 className='newsletter__titulo'>
                    Fique por dentro das melhores oportunidades
                </h2>
                <p className='newsletter__paragrafo'>
                    Receba atualizações sobre o mercado de energia, dicas práticas para economizar e ofertas exclusivas direto no seu e-mail.
                </p>
                <Formulario />
                <p className='newsletter__aviso'>
                    <Imagem caminho="/cadeado.svg" descricao="Cadeado" classe='img__cadeado' />

                    Suas informações estão protegidas com criptografia e em total conformidade com a LGPD.
                </p>
            </section>
            <div className='newsletter__bottom'>
                <hr />
            </div>
        </>
    )
}

export default Newsletter