import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export default function ProductItem({ imageUrl, productName, description, pdf }) {
    return (<Col lg={4}>
        <div className="product-item">
            <div className="product-item-img">
                <img src={imageUrl} alt={productName} />
            </div>
            <div className="product-item-content">
                <h4>{productName}</h4>
                <p>
                    {description}
                </p>
            </div>
            <div className="product-item-download">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="68" viewBox="0 0 70 65" fill="none">
                    <circle cx="65" cy="65" r="65" fill="#e00" />
                </svg>
                <a href={pdf ? pdf : "#"}>
                    <img src="/images/downloads.png" alt="download" />
                </a>
            </div>
        </div>
    </Col>)


}

ProductItem.propTypes = {
    imageUrl: PropTypes.string,
    productName: PropTypes.string,
    description: PropTypes.string,
    pdf: PropTypes.string,

}