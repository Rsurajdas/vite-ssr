import { NavLink } from "react-router-dom";

export default function DropdownItem({ path, text }) {
    return <li>
        <NavLink to={path}>
            {text}
        </NavLink>
    </li>
}