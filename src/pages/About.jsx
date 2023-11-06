import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../components/PageBanner";
import Title from "../components/Title";
import Cta from "../components/Cta";
import "../styles/about.css"
import "../styles/button.css"



export default function About() {
    return <>
        <PageBanner imageUrl="/images/about-banner.png" alt="about-banner" />
        <section className="section-about">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title>About Us</Title>
                    </Col>
                </Row>
                <Row style={{ marginTop: "45px" }}>
                    <Col lg={6}>
                        <div className="about-content">
                            <p><strong>Airlock India Pvt Ltd</strong> supplies a complete range of pneumatic conveying components of high quality to various industries with the main focus in the ASEAN region.</p>
                            <p>
                                At Airlock India we are totally committed to meet customer’s solids handling requirements to their highest expectations. Assurance can be taken from the fact that the products handled by Airlock are internationally recognized in the Food, Dairy, Pharmaceutical, Chemical and other process industries with its engineering, quality and solids handling know-how built up over years of experience.
                                We stock Airlock Brand Valves, BFM Fittings, SOLIMAR Fluidizers, JACOB and MORRIS range of components in our India facility.
                            </p>
                            <p>It is our policy always to respond immediately and professionally with consistency for the ever-changing requirements from the industries that we are serving. This gives the confidence that we can continue to do so with utmost sincerity.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-img">
                            <img src="/images/about.png" alt="about us" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="section-mission">
            <div className="mission">
                <div className="mission-img">
                    <img src="/images/successful-business-team-expressing-unity.png" alt="mission, vision" />
                </div>
                <div className="mission-content">
                    <h3>At Airlock, our vision is a world where
                        everyone thrives.</h3>
                    <ul className="mission-list">
                        <li className="mission-item">
                            <div className="mission-item-icon">
                                <img src="/images/value.png" alt="value" />
                            </div>
                            <div className="mission-item-content">
                                <h4>Our Goal</h4>
                                <p>To satisfy our customers by providing the best solution coupled with supply of high-quality products and service.</p>
                            </div>
                        </li>
                        <li className="mission-item">
                            <div className="mission-item-icon">
                                <img src="/images/mission.png" alt="mission" />
                            </div>
                            <div className="mission-item-content">
                                <h4>Our Mission</h4>
                                <p>Provide Quality, Cost Effective Pneumatic Conveying Solutions, customized to match the unique needs of our customers, with a high level of personalized service.</p>
                            </div>
                        </li>
                        <li className="mission-item">
                            <div className="mission-item-icon">
                                <img src="/images/success.png" alt="success" />
                            </div>
                            <div className="mission-item-content">
                                <h4>Our People</h4>
                                <p>Our employees are having industry expertise in Powder Handling. They work together as a team across boundaries to meet the need of the customers.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section style={{ paddingBottom: "70px" }}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Cta message="Would you like to start a project with us?" path="/contact" btnText="Get in Touch" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}

