import './Beneficios.css'
import Mensagem from '../Mensagem'

const Beneficios = () => {
    return (
        <section className='beneficios'>
            <h2 className='beneficios__titulo'>
                Já imaginou fazer tudo isso sozinho?
            </h2>
            <Mensagem paragrafoInterno="Buscar a melhor revendedora, analisar tarifas, entender contratos, negociar desconto…
            
                Tudo isso exige tempo, conhecimento e segurança para não cair em armadilhas.

                Com a 2E, você não precisa se preocupar com nada disso. Todo o processo de análise, comparação, negociação e proteção dos seus dados é feito de forma automatizada e segura — garantindo que você receba sempre a melhor opção, sem nenhuma dor de cabeça." imagemSuperior="/avatarCelular.svg" descricaoImagemSuperior="Pessoa mexendo no celular." />
        </section>
    )
}

export default Beneficios