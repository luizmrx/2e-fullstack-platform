import BannerSeguranca from '../componentes/BannerSeguranca'
import Beneficios from '../componentes/Beneficios'
import Convite from '../componentes/Convite'
import Etapas from '../componentes/Etapas'
import Footer from '../componentes/Footer'

const Seguranca = () => {

    const etapasSeguranca = [
        {
            titulo: "Inteligência de Escolha",
            paragrafo: "Nosso banco de dados é constantemente atualizado. Isso garante que você receba a melhor indicação possível, com base em tarifas reais e atualizadas."
        },
        {
            titulo: "Economia Garantida",
            paragrafo: "Você só é indicado a empresas confiáveis, com histórico sólido e autorização para operar no mercado de energia. E o melhor: sempre com o maior desconto possível.",
            imagem: "/cifrao.svg",
            textoAlternativo: "Cifrão"
        },
        {
            titulo: "Proteção de Dados",
            paragrafo: "Sua privacidade é levada a sério, e todos os seus dados são tratados em conformidade com a LGPD.",
            imagem: "/cadeado.svg",
            textoAlternativo: "Cadeado"
        }
    ]

    return (
        <>
            <BannerSeguranca />
            <Etapas titulo="Nossa base de confiança" itens={etapasSeguranca} />
            <Beneficios/>
            <Convite/>
            <Footer/>
        </>
    )
}
 
export default Seguranca