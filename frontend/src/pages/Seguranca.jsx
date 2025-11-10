import Banner from '../componentes/Banner'
import Beneficios from '../componentes/Beneficios'
import Convite from '../componentes/Convite'
import Etapas from '../componentes/Etapas'
import Footer from '../componentes/Footer'

const Seguranca = () => {

    const etapasSeguranca = [
        {
            titulo: "Inteligência de Escolha",
            paragrafo: "Nosso banco de dados é constantemente atualizado. Isso garante que você receba a melhor indicação possível, com base em tarifas reais e atualizadas.",
            imagem:"/ideia.svg",
            textoAlternativo:"Desenho de uma lâmpada simbolizando as ideias únicas dos nossos serviços"
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
            <Banner tituloInterno="Segurança em primeiro lugar" paragrafoInterno="Na 2E, a sua confiança é nossa prioridade.

            Utilizamos tecnologia de ponta, protocolos de segurança modernos e seguimos todas as diretrizes da Lei Geral de Proteção de Dados (LGPD) para assegurar que suas informações estejam sempre seguras." imagemSuperior="/cadeadoCircuito.svg" descricaoSuperior="Cadeado com circuito integrado" imagemBanner="/cadeadoCircuito.svg" descricaoImagemBanner="Cadeado" classeImagemBanner="cadeado__banner"/>
            <Etapas titulo="Nossa base de confiança" itens={etapasSeguranca} />
            <Beneficios/>
            <Convite/>
            <Footer/>
        </>
    )
}
 
export default Seguranca