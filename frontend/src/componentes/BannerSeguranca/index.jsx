import './BannerSeguranca.css'
import Mensagem from '../Mensagem'

const BannerSeguranca = () => {
    return (
        <main className='seguranca'>
            <Mensagem titulo=" Segurança em primeiro lugar" paragrafo="Na 2E, a sua confiança é nossa prioridade.
            Na 2E, a sua confiança é nossa prioridade.

            Utilizamos tecnologia de ponta, protocolos de segurança modernos e seguimos todas as diretrizes da Lei Geral de Proteção de Dados (LGPD) para assegurar que suas informações estejam sempre seguras." imagem="/cadeadoCircuito.svg" textoAlternativo="Cadeado com circuito integrado"/>
        </main>
    )
}

export default BannerSeguranca