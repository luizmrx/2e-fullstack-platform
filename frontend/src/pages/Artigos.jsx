import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Artigos.css'
import Imagem from "../componentes/Imagem";
import Footer from "../componentes/Footer";
import { verificaLargura } from "../componentes/Utils";

export default function Artigos() {
  const largura = verificaLargura();
  const maior = largura > 620;
  const [artigos, setArtigos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [carregando, setCarregando] = useState(false);

  const carregarArtigos = async (paginaAtual) => {
    setCarregando(true);
    try {
      const response = await fetch(`/blog/artigos/?page=${paginaAtual}`);
      const data = await response.json();
      setArtigos(data.results);
      const total = Math.ceil(data.count / 10);
      setTotalPaginas(total);
    } catch (error) {
      console.log("Erro ao carregar artigos:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarArtigos(pagina);
    window.scrollTo(0, 0);
  }, [pagina]);

  return (
    <>
      <section className="artigos__secao">
        <h1 className="artigos__secao_titulo">Análises e tendências do mercado</h1>
        {carregando ? (
          <p style={{ textAlign: "center" }}>Carregando artigos...</p>
        ) : (

          <ul className="artigos__lista">
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
        )}

        {/* Paginação */}
        <div className="paginacao">
          <button onClick={() => {
            setPagina((p) => Math.max(p - 1, 1));
            // window.scrollTo({ top: 0, behavior: "smooth" });
          }} disabled={pagina === 1} className="artigos__botao" >
            <i className="fas fa-chevron-left"></i> Anterior
          </button>

          <span style={{ fontSize: "16px" }}>
            Página {pagina} de {totalPaginas}
          </span>

          <button onClick={() => {
            setPagina((p) => Math.min(p + 1, totalPaginas));
            // window.scrollTo({ top: 0, behavior: "smooth" });
          }} disabled={pagina === totalPaginas} className="artigos__botao">
            {maior? (
              <>Próxima <i className="fas fa-chevron-right"></i></>
            ): (
              <><i className="fas fa-chevron-right"></i>Próxima </>
            )}
            
          </button>
        </div>

      </section>
      <Footer />
    </>
  );
}
