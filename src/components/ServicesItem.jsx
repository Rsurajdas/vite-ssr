import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function ServicesItem({ imageUrl, text }) {
    return <Col lg={3}>
        <div className="services-item">
            <div className="services-item-img">
                <img src={imageUrl} alt={text} />
            </div>
            <div className="services-item-content">
                <h3 className="mt-3">{text}</h3>
            </div>
        </div>
    </Col>
}

ServicesItem.propTypes = {
    imageUrl: PropTypes.string,
    text: PropTypes.string,
}