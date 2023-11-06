import PropTypes from 'prop-types';

export default function Title({ sidelines, children }) {
    return (<h2 className={`section-title ${sidelines ? "sidelines" : "underline"}`}>{children}</h2>)
}

Title.propTypes = {
    children: PropTypes.node,
    sidelines: PropTypes.bool
}