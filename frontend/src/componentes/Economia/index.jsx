import './Economia.css'

const Economia = () => {
    return (
        <>
            <div className='economia__top'>
                <hr />
            </div>
            <section className='economia'>
                <div className='economia__exemplos'>
                    <ul className='economia__lista'>
                        <li>Economia garantida na sua conta de luz</li>
                        <li>Sem instalações na sua residência</li>
                        <li>Energia 100% renovável</li>
                    </ul>
                </div>
                <div className='economia__info'>
                    <h2 className='economia__titulo'>
                        Economize até 25% na sua conta de luz com energia renovável
                    </h2>
                    <p className='economia__paragrafo'>
                        Com a 2E, a sua conta de luz tem economia garantida sem a necessidade de instalar nenhum equipamento em sua residência.
                    </p>
                </div>
            </section>
            <div className='economia__bottom'>
                <hr />
            </div>
        </>
    )
}

export default Economia;