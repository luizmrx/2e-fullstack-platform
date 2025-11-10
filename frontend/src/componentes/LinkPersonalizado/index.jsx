import { Link } from 'react-router-dom'
import './LinkPersonalizado.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const LinkPersonalizado = (props) =>{
    return(
        <Link to={props.destino} className='link__personalizado'>{props.texto} <i className="fas fa-arrow-right"></i></Link>
    )
}

export default LinkPersonalizado