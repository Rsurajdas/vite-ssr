import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo"
import FooterContact from "./FooterContact";
import FooterNav from "./FoorterNav";
import FooterSocial from "./FooterSocial";

export default function MainFooter() {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg={2}>
                    <Logo />
                </Col>
                <Col lg={3}>
                    <FooterContact />
                </Col>
                <Col lg={2}>
                    <FooterNav list={[{ text: 'Rotary Valves', path: "#" }, { text: 'Diverter Valves', path: "#" }, { text: 'Bin Discharger', path: "#" }, { text: 'Relief Valves', path: "#" }, { text: 'BFM® Fittings', path: "/products/bfm" }, { text: 'Morris Couplings', path: "/products/morris-coupling" }]} title="Products" />
                </Col>
                <Col lg={2}>
                    <FooterNav list={[{ text: 'Products', path: "#" }, { text: 'Services', path: "#" }, { text: 'Questionnaire', path: "#" }, { text: 'Contact Us', path: "/contact" }, { text: 'Videos', path: "#" },]} title="Useful Links" />
                </Col>
                <Col lg={3}>
                    <FooterSocial />
                </Col>
            </Row>
        </Container>
    </footer>
}