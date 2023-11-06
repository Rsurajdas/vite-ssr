import PropTypes from 'prop-types';
import "../styles/button.css"

export default function Button({ variant, children }) {
    return <button className={`button button-${variant}`}>{children}</button>
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node
}

