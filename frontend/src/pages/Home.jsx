import Banner from '../componentes/Banner'
import Economia from '../componentes/Economia'
import Vantagens from '../componentes/Vantagens'
import Callout from '../componentes/Callout'
import Lumi from '../componentes/Lumi'
import Atendimento from '../componentes/Atendimento'
import Etapas from '../componentes/Etapas'
import Newsletter from '../componentes/Newsletter'
import Parceiros from '../componentes/Parceiros'
import ArtigosConvite from '../componentes/ArtigosConvite'
import Historia from '../componentes/Historia'
import PerguntasFrequentes from '../componentes/PerguntasFrequentes'
import Footer from '../componentes/Footer'

const Home = () => {

  const etapasHome = [
    {
      titulo: "1. Envie sua conta de luz",
      paragrafo: "Tire uma foto da sua fatura e mande para a Lumi no WhatsApp. É rápido e sem burocracia.",
      imagem: "/conta.svg",
      textoAlternativo: "Imagem da conta sendo fornecida para análise."
    },
    {
      titulo: "2. A Lumi encontra a melhor oferta pra você",
      paragrafo: "Comparamos os melhores planos de revendedoras de energia para você economizar ao máximo.",
      imagem: "/grafico.svg",
      textoAlternativo: "Imagem do gráfico de economia em geral."
    },
    {
      titulo: "3. Você confere os detalhes e confirma",
      paragrafo: "Mostramos como vai funcionar e quanto você vai economizar. Se gostar, é só confirmar!",
      imagem: "/contaLupa.svg",
      textoAlternativo: "Imagem da conta com lupa."
    },
    {
      titulo: " 4. Pronto! Comece a economizar em até 60 dias!",
      paragrafo: "Você começa a receber os créditos de energia na sua conta e vê a economia mês a mês.",
      imagem: "/cifrao.svg",
      textoAlternativo: "Cifrão."
    }
  ]

  return (
    <>
      <Banner luz="sim" titulo="Única no Brasil a buscar o menor preço de energia no seu endereço" paragrafo="Comparamos as melhores revendedoras para garantir o máximo desconto na sua conta de luz." botao="Comece agora" descricao="Plataforma segura, intuitiva e pensada para trazer os melhores descontos na sua conta."/>
      <Economia/>
      <Vantagens/>
      <Callout titulo="Mais liberdade" mensagem="Saia do monopólio da concessionária local e conquiste autonomia para definir seu fornecedor de energia."/>
      <Lumi titulo="Conheça a Lumi" descricao="Com o apoio da Lumi — nossa inteligência artificial especializada — analisamos suas informações para conectar você com empresas que oferecem descontos reais e vantagens exclusivas, sempre com total segurança, transparência e sem enrolação."/>
      <Atendimento titulo="Atendimento rápido e personalizado" descricao="Na 2E, você não perde tempo com filas ou esperas intermináveis.

      Nossa assistente virtual Lumi faz o primeiro atendimento em minutos. Se necessário, você fala com um atendente humano especializado, sem repetição e sem burocracia.
      
      Diferente das concessionárias locais, onde o atendimento costuma ser lento e impessoal, aqui você tem respostas rápidas, soluções ágeis e um atendimento feito para você.
      "/>
      <Etapas titulo="O que você precisa fazer" itens={etapasHome} />
      <Newsletter />
      <ArtigosConvite/>
      <Historia/>
      <PerguntasFrequentes/>
      <Footer />
    </>
  )
}

export default Home