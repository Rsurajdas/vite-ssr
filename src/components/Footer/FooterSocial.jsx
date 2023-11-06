import { Link } from "react-router-dom";
import FooterItem from "./FooterItem";

export default function FooterSocial() {
    return <FooterItem title="Follow Us">
        <ul className="footer-social">
            <li>
                <Link to="/">
                    <img src="/images/facebook.png" alt="facebook" />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img src="/images/twitter.png" alt="twitter" />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img src="/images/linkedin.png" alt="linkedin" />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img src="/images/behance.png" alt="behance" />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img src="/images/instagram.png" alt="instagram" />
                </Link>
            </li>
        </ul>
    </FooterItem>
}