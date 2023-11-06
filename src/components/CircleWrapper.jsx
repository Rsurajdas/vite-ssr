import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function CircleWrapper({ image, icon, title }) {
    return <Col lg={4} sm={6}>
        <div className="circle-wrapper">
            <div className="circle">
                <img src={image} alt={title} />
                <div className="circle-icon">
                    <img src={icon} alt={title} />
                </div>
            </div>
            <h3>{title}</h3>
        </div>
    </Col>
}

CircleWrapper.propTypes = {
    image: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
}