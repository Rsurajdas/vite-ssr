import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../components/PageBanner";
import Title from "../components/Title";
import ServicesItem from "../components/ServicesItem";
import BeforeAfter from "../components/BeforeAfter";
import "../styles/services.css"

const SERVICES = [
    {
        id: 1,
        imageUrl: "/images/inspection.png",
        text: "Parts Inspection"
    },
    {
        id: 2,
        imageUrl: "/images/special_checks.png",
        text: "Special Checks"
    },
    {
        id: 3,
        imageUrl: "/images/reports.png",
        text: "Deviation Reports"
    },
    {
        id: 4,
        imageUrl: "/images/certification.png",
        text: "Certification where necessary"
    },
    {
        id: 5,
        imageUrl: "/images/spares_support.png",
        text: "Spares Support"
    },
]
const ASSEMBLY = [
    {
        id: 1,
        imageUrl: "/images/test_run.png",
        text: "Test Run"
    },
    {
        id: 2,
        imageUrl: "/images/leakage_test.png",
        text: "Leakage Test (Wherever applicable)"
    },
    {
        id: 3,
        imageUrl: "/images/documents.png",
        text: "Documentation"
    },
]
const CONTACT = [
    {
        id: 1,
        imageUrl: "/images/essential_service_programs.png",
        text: "Essential Service Programs"
    },
    {
        id: 2,
        imageUrl: "/images/preventive_maintenance.png",
        text: "Preventive Maintenance"
    },
    {
        id: 3,
        imageUrl: "/images/annual_maintenance.png",
        text: "Annual Maintenance"
    },
]

export default function Services() {
    return <>
        <PageBanner imageUrl="/images/services-banner.webp" alt="services-banner" />
        <section style={{ padding: "50px 0" }}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title>
                            SERVICE AND MAINTENANCE
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="services-content mt-4">
                            <p><strong>Airlock India Pvt Ltd</strong> is young and energetic company with passion to deliver value to the customers . We undertake servicing of Rotary Valves, Diverter Valves, Blowers & Pneumatic Conveying Components. We do not have limitations in servicing other makes of Valve. Airlock has professionally trained engineers / technicians to service all the makes of Valves. Company has a separate service facility and a team to perform all service activities.</p>
                            <p>Our factory trained engineers will discuss and finalize the most appropriate program the plant needs. These ranges from services that are cost effective, proactive and compliance oriented. For example, we have Drop-in replacement concept which is unique in the market offered by us. Please feel free to contact us for detail discussion on the above concept.</p>
                            <p>
                                We provide <a href="/images/Airlock-Service-Brochure.pdf">After Sales Service</a> with complete Spare&apos;s back-up for all products we manufacture / handle.
                                We undertake maintenance of Rotary Valves, Diverter Valves, Blowers of all makes and sizes including <a href="Annual-Maintenance-Contract-AMC.pdf">Annual Maintenance Contract (AMC)</a> for the same.
                            </p>
                            <p>Our engineers are factory trained in servicing various brands of Blowers, Rotary Valves, Diverter Valves, Butterfly Valves and other equipment&apos;s mostly used in the process industries. We stock commonly used Spares for these items.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section style={{ padding: "50px 0" }}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>
                            Our Service Includes
                        </Title>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {SERVICES.map(item => <ServicesItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
        <section style={{ padding: "50px 0" }}>
            <Container>
                <Row className="gy-4">
                    <Col lg={4}>
                        <div className="services-beforeafter">
                            <BeforeAfter beforeImg="/images/services/before_1.webp" afterImg="/images/services/after_1.webp" />
                            <h3 className="mt-3">Rotary Valve</h3>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="services-beforeafter">
                            <BeforeAfter beforeImg="/images/services/before_2.webp" afterImg="/images/services/after_2.webp" />
                            <h3 className="mt-3">Diverter Valve</h3>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="services-beforeafter">
                            <BeforeAfter beforeImg="/images/services/before_3.webp" afterImg="/images/services/after_3.webp" />
                            <h3 className="mt-3">Roots Blower</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section style={{ padding: "50px 0" }}>
            <Container>
                <Row >
                    <Col lg={12}>
                        <Title sidelines={true}>
                            After Assembly
                        </Title>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    {ASSEMBLY.map(item => <ServicesItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
        <section style={{ padding: "50px 0" }}>
            <Container>
                <Row >
                    <Col lg={12}>
                        <Title sidelines={true}>
                            Contact Us For
                        </Title>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    {CONTACT.map(item => <ServicesItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}