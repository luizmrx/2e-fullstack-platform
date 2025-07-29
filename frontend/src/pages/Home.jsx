import Banner from '../componentes/Banner'
import Etapas from '../componentes/Etapas'
import Newsletter from '../componentes/Newsletter'
import Parceiros from '../componentes/Parceiros'
import Conversar from '../componentes/Conversar'
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
      <Banner />
      <Etapas titulo="O que você precisa fazer" itens={etapasHome} />
      <Newsletter />
      <Parceiros />
      <Conversar />
      <Footer />
    </>
  )
}

export default Home