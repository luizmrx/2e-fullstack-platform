import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Artigo.css'

function ArtigoDetalhe() {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    fetch(`/blog/artigos/${id}/`)
      .then(res => res.json())
      .then(data => setArtigo(data));
  }, [id]);

  if (!artigo) return <p>Carregando...</p>;

  return (
    <section dangerouslySetInnerHTML={{__html: artigo.conteudo}} className="artigo__container"></section>
  );
}

export default ArtigoDetalhe;
