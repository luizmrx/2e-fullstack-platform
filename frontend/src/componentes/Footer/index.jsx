import './Footer.css'
import Imagem from '../Imagem'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { verificaLargura } from '../Utils';

const Footer = () => {

    const mediaLargura = verificaLargura() >= 520;

    return (
        <footer className='rodape'>
            <h2 className='rodape__titulo'>
                <Imagem caminho="/logo__branco__navbar.svg" descricao="Logo da 2E" classe="logo__footer" />
                Transformamos energia em economia
            </h2>

            <div className='rodape__divisor'>
                <hr />
            </div>

            <section className='rodape__links'>
                <ul className='rodape__links__container'>
                    <li className='rodape__links__item'>
                        <Link to={'/'} className='rodape__link'>Home</Link>
                    </li>
                    <li className='rodape__links__item'>
                        <Link to={'/sobre'} className='rodape__link'>Sobre nós</Link>
                    </li>
                    {!mediaLargura && (
                        <>
                            <li className='rodape__links__item'>
                                <Link to={'/faq'} className='rodape__link'>Dúvidas frequentes</Link>
                            </li>
                            <li className='rodape__links__item'>
                                <Link to={'/artigos'} className='rodape__link'>Artigos</Link>
                            </li>
                        </>
                    )}
                    <li></li>
                    <li>
                        Horário de atendimento: Segunda à Sexta das 08:00 às 18:00
                    </li>

                </ul>
                {mediaLargura && (
                    <ul className='rodape__links__container'>
                        <li className='rodape__links__item'>
                            <Link to={'/faq'} className='rodape__link'>Dúvidas frequentes</Link>
                        </li>
                        <li className='rodape__links__item'>
                            <Link to={'/artigos'} className='rodape__link'>Artigos</Link>
                        </li>
                    </ul>
                )}

                <ul className='rodape__links__container'>
                    <li className='rodape__links__item'>
                        <Link to={'https://www.facebook.com/profile.php?id=61578086184854'} className='rodape__link rodape__icone'><i className="fab fa-facebook-f icon"></i></Link>
                    </li>
                    <li className='rodape__links__item'>
                        <Link to={'https://www.instagram.com/encontreeconomiabrasil/'} className='rodape__link rodape__icone'><i className="fab fa-instagram icon"></i></Link>
                    </li>
                    <li className='rodape__links__item'>
                        <Link to={'https://www.linkedin.com/company/2e-encontre-economia'} className='rodape__link rodape__icone'><i className="fab fa-linkedin-in icon"></i></Link>
                    </li>
                </ul>
            </section>
            <p className='rodape__sobre'>contato@encontreeconomia.com.br</p>
            <p className='rodape__sobre'>© 2025 EncontreEconomia Ltda. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer