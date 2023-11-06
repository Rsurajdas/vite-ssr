import { Col, Container, Row } from "react-bootstrap"
import Title from "../components/Title"
import "../styles/contact.css"


export default function Contact() {

    return (<>
        <section className="section-contact">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title>Contact Us</Title>
                        <p className="text-center pt-3">We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.</p>
                    </Col>
                </Row>
                <Row className="mt-5 g-0">
                    <Col lg={6}>
                        <div className="contact-detail">
                            <Row >
                                <Col lg={6}>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">
                                            <img src="/images/location.png" alt="email-icon" />
                                        </div>
                                        <div className="contact-item-detail">
                                            <h3>Head office</h3>
                                            <p>
                                                1/15-8, Ponnandampalayam, Arasur - Annur Road,
                                                Thennampalayam, Coimbatore – 641 659,
                                                Tamil Nadu, India.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">
                                            <img src="/images/email.png" alt="location-icon" />
                                        </div>
                                        <div className="contact-item-detail">
                                            <h3>Email</h3>
                                            <p>
                                                <a href="mailto: sales@airlockintl.co.in"> sales@airlockintl.co.in</a>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="contact-item">
                                        <div className="contact-item-icon">
                                            <img src="/images/phone-call.png" alt="phone-icon" />
                                        </div>
                                        <div className="contact-item-detail">
                                            <h3>Phone</h3>
                                            <p>
                                                <a href="tel:+914226678535"> +91 (422) 6678535</a>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.100599906915!2d77.13079357515032!3d11.105879889063642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff1c5b5831b9%3A0xb6caf266bf4f73d9!2sAIRLOCK%20INDIA%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1697096502199!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="contact-map"></iframe>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="contact-sale">
                            <Title sidelines={true}>SALES OFFICES</Title>
                            <ul>
                                <li>
                                    <span>Delhi:</span> <a href="tel:+917540096868">+91 75400 96868</a>
                                </li>
                                <li>
                                    <span>Chandigarh:</span> <a href="tel:+919384051602">+91 93840 51602</a>
                                </li>
                                <li>
                                    <span>Vadodara:</span> <a href="tel:+919384051607">+91 93840 51607</a>
                                </li>
                                <li>
                                    <span>Mumbai:</span> <a href="tel:+919384051604">+919384051604</a>
                                </li>
                                <li>
                                    <span>Pune:</span> <a href="tel:+919384051601">+919384051601</a>
                                </li>
                                <li>
                                    <span>Kolkata:</span> <a href="tel:+917540042451">+917540042451</a>
                                </li>
                                <li>
                                    <span>Hyderabad:</span> <a href="tel:+917540042451">+917540042451</a>
                                </li>
                                <li>
                                    <span>Bangalore:</span> <a href="tel:+919384051611">+919384051611</a>
                                </li>
                                <li>
                                    <span>Coimbatore:</span> <a href="tel:+917540042471">+917540042471</a>
                                </li>
                                <li>
                                    <span>Internal Sales:</span> <a href="tel:+917540042428">+917540042428</a><span>(at Coimbatore HQ)</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}

