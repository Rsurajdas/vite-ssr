import PropTypes from 'prop-types';

export default function CustomerItem({ image, altText }) {
    return <div className="customer">
        <img src={image} alt={altText} />
    </div>
}

CustomerItem.propTypes = {
    image: PropTypes.string,
    altText: PropTypes.string
}