import './Vantagens.css'
import Imagem from '../Imagem'

const Vantagens = () => {
    return (
        <section className='vantagens'>
            <div className='vantagens__local'>
                <h2 className='vantagens__titulo'>
                    Concessionária local
                </h2>
                <ul className='vantagens__lista'>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalErro.svg" descricao="Ícone de erro" classe="icone__vantagens"/>
                        Sem controle
                    </li>
                    <li className='vantagens__lista__info'>
                        Contas de luz elevadas sem clareza sobre a composição do valor.
                    </li>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalErro.svg" descricao="Ícone de erro" classe="icone__vantagens"/>
                        Sem economia
                    </li>
                    <li className='vantagens__lista__info'>
                        Não há nenhuma economia no seu consumo mensal.
                    </li>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalErro.svg" descricao="Ícone de erro" classe="icone__vantagens"/>
                        Sem atendimento personalizado
                    </li>
                    <li className='vantagens__lista__info'>
                        Longo tempo de espera para resolver problemas via telefone ou presencialmente.
                    </li>
                </ul>
            </div>
            <div className='vantagens__revendedora'>
                <h2 className='vantagens__titulo'>
                    Revendedora de energia
                </h2>
                <ul className='vantagens__lista'>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalOK.svg" descricao="Ícone de sinal OK" classe="icone__vantagens"/>
                        Poder de escolha
                    </li>
                    <li className='vantagens__lista__info'>
                        Compare diferentes fornecedores e escolha aquele oferece o melhor preço e condições para você.
                    </li>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalOK.svg" descricao="Ícone de sinal OK" classe="icone__vantagens"/>
                        Qualidade no serviço
                    </li>
                    <li className='vantagens__lista__info'>
                        Atendimento rápido e fácil, sem fila de espera.
                    </li>
                    <li className='vantagens__lista__titulo'>
                        <Imagem caminho="/sinalOK.svg" descricao="Ícone de sinal OK" classe="icone__vantagens"/>
                        Economia real na conta
                    </li>
                    <li className='vantagens__lista__info'>
                        Encontre tarifas mais baixas por kWh e reduza seus gastos de forma significativa.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Vantagens