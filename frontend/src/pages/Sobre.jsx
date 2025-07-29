import Etapas from "../componentes/Etapas"
import Historia from "../componentes/Historia"
import Footer from "../componentes/Footer"
import Atendimento from "../componentes/Atendimento"
import Justificativas from "../componentes/Justificativas"

const Sobre = () => {

    const etapasSobre = [
        {
            titulo: "1. Empresas produzem energia limpa e mais barata",
            paragrafo: "Geradores de energia, como fazendas solares, produzem eletricidade e a transformam em créditos de energia.",
            imagem: "/placaSolar.svg",
            textoAlternativo: "Desenho de placas solares."
        },
        {
            titulo: " 2. Esses créditos reduzem sua conta de luz",
            paragrafo: "A distribuidora da sua região reconhece esses créditos e desconta o valor direto da sua fatura.",
            imagem: "/moedas.svg",
            textoAlternativo: "Desenho de moedas"
        },
        {
            titulo: " 3. Você economiza sem mudar nada na sua casa",
            paragrafo: "Os créditos são mais baratos que a energia comum, e você não precisa instalar placas ou equipamentos.",
            imagem: "/avatarCasa.svg",
            textoAlternativo: "Desenho de pessoa descansando em casa"
        },
        {
            titulo: " 4. A Lumi faz tudo por você",
            paragrafo: "A nossa assistente encontra os créditos mais baratos disponíveis e cuida de tudo para você pagar menos todo mês.",
            imagem: "/logo__branco.svg",
            textoAlternativo: "Logo da 2E"
        }
    ]

    const justificativasSobre = [
        "Atendimento direto via WhatsApp",
        "IA própria que cuida do seu perfil e busca o melhor desconto",
        "Atendimento gratuito, do começo ao fim",
        "Facilitamos a sua contratação e cuidamos de todos os processos para você",
        "Processo simples, transparente e seguro"
    ]

    return (
        <>
            <Historia />
            <Etapas titulo="Economizar é simples assim" itens={etapasSobre} />
            <Atendimento />
            <Justificativas titulo="Por que escolher a 2E?" itens={justificativasSobre}/>
            <Footer />
        </>
    )
}

export default Sobre