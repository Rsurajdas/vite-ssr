import PropTypes from 'prop-types';

export default function NavContactItem({ icon, heading, detail }) {
    return <div className="nav-contact-item nav-contact-item_1">
        <div className="nav-contact-item_img">
            <img src={icon} alt={heading} />
        </div>
        <div className="nav-contact-item_content">
            <h4>{heading}</h4>
            <span>{detail}</span>
        </div>
    </div>
}

NavContactItem.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    detail: PropTypes.string
}
