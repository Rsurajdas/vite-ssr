import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavItem({ dropdown, route, text, children }) {
    return <li>
        <NavLink to={route} className={`${dropdown ? "has-dropdown" : null}`}>
            {text}
        </NavLink>
        {children}
    </li>
}

NavItem.propTypes = {
    dropdown: PropTypes.bool,
    route: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
}