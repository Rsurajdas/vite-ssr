import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const SOLIMAR_PRODUCTS = [
    {
        id: 1,
        productName: "Fluidizer",
        imageUrl: "/images/products/solimar/fluidizer.webp",
        pdf: "/images/products/solimar/fluidizer.pdf"
    },
    {
        id: 2,
        productName: "Knockers",
        imageUrl: "/images/products/solimar/knockers.webp",
        pdf: "/images/products/solimar/knockers.pdf",
    },
    {
        id: 3,
        productName: "Dry Bulk Fluidizer",
        imageUrl: "/images/products/solimar/dry_bulk_fluidizer.webp",
        pdf: "/images/products/solimar/dry_bulk_fluidizer.pdf",
    },
    {
        id: 4,
        productName: "Sanitary Fluidizer",
        imageUrl: "/images/products/solimar/sanitary_fluidizer.webp",
        pdf: "/images/products/solimar/sanitary_fluidizer.pdf",
    },
    {
        id: 5,
        productName: "MD Fluidizer",
        imageUrl: "/images/products/solimar/md_fluidizer.webp",
        pdf: "/images/products/solimar/md_fluidizer.pdf",
    },
    {
        id: 6,
        productName: "Fluidizer Control System",
        imageUrl: "/images/products/solimar/fluidizer_control_system.webp",
        pdf: "/images/products/solimar/fluidizer_control_system.pdf",
    },
]


export default function Solimar() {
    return <>
        <PageBanner imageUrl="/images/products/jacob/jacob_slider.webp" alt="product-banner" />
        <section className="section-products pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>Solimar Fluidizers</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {SOLIMAR_PRODUCTS.map(item => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}