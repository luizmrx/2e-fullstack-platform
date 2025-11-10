import Banner from "../componentes/Banner"
import Etapas from "../componentes/Etapas"
import Footer from "../componentes/Footer"
import Atendimento from "../componentes/Atendimento"
import Justificativas from "../componentes/Justificativas"
import BannerSobre from "../componentes/BannerSobre"
import Lumi from "../componentes/Lumi"
import Callout from "../componentes/Callout"

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
            <BannerSobre/>
            <Lumi titulo={"Tudo começou com uma ideia simples: ajudar brasileiros a economizar na conta de luz"} descricao={"A 2E nasceu da inquietação de um estudante da USP que, durante seu estágio, percebeu uma grande barreira: milhões de brasileiros desconheciam o real potencial dos créditos de energia para reduzir a conta de luz. Ao compartilhar essa visão com seu gestor, surgiu a ideia de transformar esse desafio em oportunidade. Assim nasceu a 2E: uma plataforma inovadora que conecta clientes às melhores revendedoras de energia em um único ambiente digital."}/>
            <Callout titulo={"Nossa missão"} mensagem={"Conectar os nossos clientes às melhores revendedoras de energia, garantindo economia real na conta de luz"}/>
            <Etapas titulo="Economizar é simples assim" itens={etapasSobre} />
            <Justificativas titulo="Por que escolher a 2E?" itens={justificativasSobre}/>
            <Footer />
        </>
    )
}

export default Sobre