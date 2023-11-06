import { Link } from "react-router-dom";

export default function FooterNavItem({ path, text }) {
    return <li>
        <Link to={path}>
            {text}
        </Link>
    </li>
}