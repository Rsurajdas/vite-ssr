import FooterItem from "./FooterItem";
import FooterNavItem from "./FooterNavItem";
import PropTypes from 'prop-types';

export default function FooterNav({ list, title }) {
    return <FooterItem title={title}>
        <ul className="footer-nav">
            {list.map((el, idx) => <FooterNavItem key={idx} path={el.path} text={el.text} />)}
        </ul>
    </FooterItem>
}

FooterNav.propTypes = {
    list: PropTypes.array,
    title: PropTypes.string,
}