import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import './ArtigosConvite.css'
import LinkPersonalizado from '../LinkPersonalizado'
import Imagem from '../Imagem'

const ArtigosConvite = () => {

    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        const fetchArtigos = async () => {
            try {
                const response = await fetch(`/blog/artigos/?page=1`);
                const data = await response.json();
                setArtigos(data.results.slice(0, 3));
            } catch (err) {
                console.log(err);
            }
        };

        fetchArtigos();
    }, []);

    return (
        <>
            <section className='artigos__convite'>
                <h2 className='artigos__titulo'>
                    Entenda tudo sobre o mercado
                </h2>
                <ul className='artigos__lista'>
                    {artigos.map(artigo => (
                        <li key={artigo.id} className="artigo__lista__item">
                            <Imagem caminhoArtigo={artigo.capa} classe="artigo_item_lista" />
                            <div className="artigos__info">
                                <h2>{artigo.titulo}</h2>
                                <p>{artigo.resumo}</p>
                                <p><i className="far fa-calendar"></i>  Publicado em: {new Date(artigo.data_publicacao).toLocaleDateString('pt-BR')}</p>
                                <Link to={`/artigo/${artigo.id}`} className="artigo__link">Leia mais</Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='artigos__link'>
                    <LinkPersonalizado destino="/artigos" texto="Artigos" />
                </div>
            </section>
            <div className='artigos__convite__bottom'>
                <hr />
            </div>
        </>


    )
}

export default ArtigosConvite