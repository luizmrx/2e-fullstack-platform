import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import './PerguntasFrequentes.css'
import LinkPersonalizado from "../LinkPersonalizado";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Pergunta = ({ pergunta, resposta }) => {
    const [aberto, setAberto] = useState(false);

    return (
        <div className="faq__item">
            <button className="faq__pergunta" onClick={() => setAberto(!aberto)}>
                {pergunta}
                <span className={`faq__icone ${aberto ? "aberto" : ""}`}>▼</span>
            </button>
            {aberto && <p className="faq__resposta">{resposta}</p>}
        </div>
    );
};

const PerguntasFrequentes = () => {

    const pagAtual = useLocation();

    const perguntas = [
        {
            pergunta: "O que é o Encontre Economia (2E)?",
            resposta: "O Encontre Economia (2E) é uma plataforma que conecta você aos revendedores de energia elétrica mais baratos e confiáveis da sua região. Nós comparamos preços e condições para garantir mais economia e poder de escolha."
        },
        {
            pergunta: "Vou continuar recebendo energia normalmente?",
            resposta: "Sim! A energia continuará chegando pela mesma rede elétrica, sem interrupções. A única diferença será de quem fornece e o quanto você paga por ela."
        },
        {
            pergunta: "É seguro trocar de fornecedor de energia?",
            resposta: "Totalmente seguro. Todos os nossos parceiros são autorizados e regulados pela ANEEL (Agência Nacional de Energia Elétrica)."
        },
        {
            pergunta: "Preciso pagar alguma taxa para usar o serviço do 2E?",
            resposta: "Não! O serviço é 100% gratuito para o consumidor. Quem nos remunera são os revendedores parceiros, quando o contrato é fechado."
        },
        {
            pergunta: "Qual a economia média que posso ter?",
            resposta: "Depende do seu consumo e região, mas nossos clientes geralmente economizam de 10% a 30% na conta de luz."
        },
        {
            pergunta: "E se eu tiver problema com a energia?",
            resposta: "A manutenção da rede e o atendimento técnico continuam sendo responsabilidade da sua concessionária local, mesmo após a troca."
        },
        {
            pergunta: "Quanto tempo leva para mudar de fornecedor?",
            resposta: "O prazo médio é de até 60 dias, variando conforme seu contrato atual e região."
        },
        {
            pergunta: "Preciso trocar equipamentos ou medidores?",
            resposta: "Na maioria dos casos, não."
        },
        {
            pergunta: "Como faço para começar?",
            resposta: "É simples: fale conosco pelo WhatsApp. Nossa equipe (junto com a Lumi) coleta as informações necessárias e já inicia todo o processo de cadastro, sem burocracia. Em poucos minutos, apresentamos as melhores ofertas para você."
        },
        {
            pergunta: "Quem é a Lumi?",
            resposta: "A Lumi é a nossa assistente virtual inteligente, que faz o primeiro atendimento para entender sua necessidade, explicar como funciona nosso serviço e coletar as informações para encontrarmos as melhores ofertas."
        },
        {
            pergunta: "Posso escolher qualquer revendedor?",
            resposta: "Sim, desde que ele atenda sua região e siga as regras do mercado livre de energia. Nós apresentamos as melhores opções disponíveis para você."
        },
        {
            pergunta: "Posso voltar para a minha concessionária antiga?",
            resposta: "Sim, mas normalmente não vale a pena, já que as tarifas costumam ser mais altas do que as que você terá conosco."
        },
        {
            pergunta: "Posso contratar para minha casa e para minha empresa?",
            resposta: "Sim! Nós atendemos tanto consumidores residenciais quanto empresas e condomínios."
        },
        {
            pergunta: "Existe fidelidade no contrato com o novo fornecedor?",
            resposta: "Depende do fornecedor escolhido. Nós apresentamos as opções e condições para você escolher a que mais se adapta às suas necessidades."
        },
        {
            pergunta: "Vocês atendem todo o Brasil?",
            resposta: "Atendemos a maior parte do país, mas a disponibilidade pode variar. Basta informar seu CEP para verificarmos."
        },
        {
            pergunta: "A Lumi substitui o atendimento humano?",
            resposta: "Não. A Lumi cuida das etapas iniciais para agilizar o processo, mas, se você precisar, será transferido rapidamente para nossa equipe humana, sem filas e sem espera."
        },
        {
            pergunta: "A Lumi funciona 24 horas por dia?",
            resposta: "Sim! A Lumi está disponível todos os dias, a qualquer hora, para atender você sempre que precisar."
        },
        {
            pergunta: "É seguro passar minhas informações para a Lumi?",
            resposta: "Sim. Todos os dados coletados pela Lumi são protegidos com criptografia e usados exclusivamente para buscar a melhor oferta para você."
        },
        {
            pergunta: "Como a Lumi ajuda a economizar tempo?",
            resposta: "Ela responde instantaneamente, sem filas de espera, e já filtra as informações para que nossa equipe encontre as melhores opções sem enrolação."
        },
        {
            pergunta: "Por que o atendimento do Encontre Economia é mais rápido que o da concessionária local?",
            resposta: "Enquanto as concessionárias costumam ter filas longas e processos burocráticos, nós atendemos de forma digital e direta, resolvendo a maioria dos casos no mesmo dia."
        },
        {
            pergunta: "Vocês têm tempo médio de resposta?",
            resposta: "Sim! Nosso tempo médio para responder clientes é de menos de 5 minutos no horário comercial — e a Lumi atende de forma instantânea 24h por dia."
        },
        {
            pergunta: "Como posso falar com um atendente humano rapidamente?",
            resposta: "Se a Lumi não resolver sua dúvida, você pode pedir para falar com nossa equipe e será atendido em poucos minutos, sem precisar repetir tudo do zero."
        },
        {
            pergunta: "Posso ser atendido por WhatsApp?",
            resposta: "Sim! Nosso atendimento é totalmente integrado ao WhatsApp, para você falar com a gente de forma simples, rápida e familiar."
        },
        {
            pergunta: "Qual a diferença no atendimento do Encontre Economia para o da concessionária?",
            resposta: "Nós somos rápidos, claros e acessíveis. Você fala com a Lumi ou com um atendente humano sem filas, sem transferências intermináveis e sem ficar horas esperando na linha."
        }
    ];

    const perguntasVisiveis = pagAtual.pathname === "/" ? perguntas.slice(0, 10) : perguntas;

    return (
        <section className='perguntas__frequentes'>
            <h2 className='perguntas__titulo'>
                Perguntas frequentes
            </h2>
            {perguntasVisiveis.map((item, index) => (
                <Pergunta
                    key={index}
                    pergunta={item.pergunta}
                    resposta={item.resposta}
                />
            ))}
            {pagAtual.pathname === "/" && (
                <div className="perguntas__link">
                    <LinkPersonalizado destino="/faq" texto="Mais perguntas" />
                </div>
            )}
        </section>
    )
}

export default PerguntasFrequentes