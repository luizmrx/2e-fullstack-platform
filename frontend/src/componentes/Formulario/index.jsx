import './Formulario.css'
import CaixaTexto from '../CaixaTexto'
import { useState } from 'react'
import PrivacyModal from '../PrivacyModel'

const Formulario = () => {

    // const aoSalvar = (event) =>{
    //     event.preventDefault()
    //     console.log("Formulario foi submetido")
    // }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [termos, setTermos] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [ofertas, setOfertas] = useState(false);
    const [botaoTexto, setBotaoTexto] = useState("Quero economizar!")

    function getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name + '='))
            ?.split('=')[1];
        return cookieValue;
    }

    const formatarTelefone = (valor) => {
        // Remove tudo que não é dígito
        valor = valor.replace(/\D/g, "");

        if (valor.length <= 10) {
            // Formato fixo: (XX) XXXX-XXXX
            return valor
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            // Formato celular: (XX) XXXXX-XXXX
            return valor
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2");
        }
    };

    const formatarCep = (valor) => {
        // remove tudo que não for número
        let cep = valor.replace(/\D/g, "");

        // limita em 8 dígitos
        cep = cep.slice(0, 8);

        // adiciona o hífen depois do 5º número
        if (cep.length > 5) {
            cep = cep.replace(/(\d{5})(\d{1,3})/, "$1-$2");
        }

        return cep;
    };

    const aoSalvar = async (evento) => {
        evento.preventDefault();

        const csrftoken = getCookie('csrftoken');

        setBotaoTexto("Enviando...");

        try {

            const response = await fetch('/api/leads/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({ nome, email, cep, telefone }),
            });

            if (!response.ok) {
                throw new Error("Erro no envio do formulário");
            }

            const data = await response.json();
            console.log(data);

            setBotaoTexto("Enviado!");

            // Limpar formulário
            setNome("");
            setEmail("");
            setCep("");
            setTelefone("");
            setTermos(false);
            setOfertas(false);

        } catch (error) {
            console.error(error);
            setBotaoTexto("Quero Economizar!");
        }

    }

    return (
        <>
        <form onSubmit={aoSalvar} className='formulario'>
            <CaixaTexto tipo="text" placeholder="Nome" obrigatorio={true} mudanca={evento => setNome(evento.target.value)} />
            <CaixaTexto tipo="email" placeholder="E-mail" obrigatorio={true} mudanca={evento => setEmail(evento.target.value)} />
            <div className='formulario__container'>
                <CaixaTexto tipo="text" placeholder="CEP" obrigatorio={true} valor={cep} maximo={9} mudanca={evento => setCep(formatarCep(evento.target.value))} />
                <CaixaTexto tipo="tel" placeholder="Telefone" obrigatorio={true} valor={telefone} maximo={15} modo="numeric" mudanca={evento => setTelefone(formatarTelefone(evento.target.value))} />
            </div>
            <div className="checkbox__linha">
                <input type="checkbox" id="termos" checked={termos} required onChange={evento => setTermos(evento.target.checked)} />
                <span>Li e concordo com a {" "}
                   <span
                        style={{ color: "#ffffffff", cursor: "pointer", textDecoration: "underline" }}
                        onClick={() => setShowPrivacy(true)}
                    >
                        Política de Privacidade
                    </span>
                </span>
            </div>
            
            <div className="checkbox__linha">
                <input type="checkbox" id="ofertas" checked={ofertas} required onChange={evento => setOfertas(evento.target.checked)} />
                <span>Concordo em receber ofertas da 2E</span>
            </div>
            <button className='formulario__botao'>{botaoTexto}</button>
        </form>
        <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
        </>
    )
}

export default Formulario