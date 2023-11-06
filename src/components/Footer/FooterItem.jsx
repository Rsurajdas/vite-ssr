import PropTypes from 'prop-types';

export default function FooterItem({ title, children }) {
    return <div className="footer-item">
        <h3>{title}</h3>
        {children}
    </div>
}
FooterItem.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}