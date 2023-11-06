import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function Cta({ message, path, btnText }) {
    return <div className="cta-wrapper">
        <h3>{message}</h3>
        <Link to={path} className='button button-solid-white'>
            {btnText}
        </Link>
    </div>
}

Cta.propTypes = {
    message: PropTypes.string,
    path: PropTypes.string,
    btnText: PropTypes.string
}