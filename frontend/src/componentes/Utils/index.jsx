import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Utils.css'

export function verificaLargura() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const maxLargura = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', maxLargura);

    return () => window.removeEventListener('resize', maxLargura);
  }, []);

  return largura;
}

export function sublinhaLink(endereco, texto) {

  const pagAtual = useLocation().pathname;

  return (
    <span className={pagAtual === endereco ? "cabecalho__direita__link sublinhado" : "cabecalho__direita__link"}>
      {texto}
    </span>
  )

}