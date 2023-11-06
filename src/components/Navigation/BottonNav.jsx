import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import Logo from "../Logo"
import NavContact from "./NavContact"
import NavList from "./NavList"
import ToggleMenu from "./ToggleMenu"

export default function BottomNav() {
    return <div className="bottom-nav">
        <Container>
            <div className="nav">
                <Logo />
                <NavContact />
                <div className="nav-cta">
                    <Link to="/"
                    >Get Quote
                        <img src="/images/right-arrow.png" alt="right-arrow" />
                    </Link>
                </div>
                <NavList />
                <ToggleMenu />
            </div>
        </Container>
    </div>
}