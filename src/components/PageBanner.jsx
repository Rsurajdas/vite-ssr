import PropTypes from 'prop-types';

export default function PageBanner({ imageUrl, alt }) {
    return <section className="page-banner">
        <img src={imageUrl} alt={alt} />
    </section>
}

PageBanner.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
}