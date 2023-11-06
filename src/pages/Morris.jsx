import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const MORRIS_PRODUCTS = [
    {
        id: 1,
        productName: "Morris Couplings",
        imageUrl: "/images/products/morris/morris_couplings.png"
    },
    {
        id: 2,
        productName: "Morris Bends",
        imageUrl: "/images/products/morris/morris_bends.jpg"
    },
    {
        id: 3,
        productName: "Morris Straight Pipes",
        imageUrl: "/images/products/morris/morris_straight_pipes.jpg"
    },
    {
        id: 4,
        productName: "Morris Flexible Hose",
        imageUrl: "/images/products/morris/morris_flexible_hose.jpg"
    },
    {
        id: 5,
        productName: "Morris Side Band Coupling",
        imageUrl: "/images/products/morris/morris_side-band-coupling.png"
    },
    {
        id: 6,
        productName: "Morris Custom Welds",
        imageUrl: "/images/products/morris/morris_custom_welds.jpg"
    },
]


export default function Morris() {
    return <>
        <PageBanner imageUrl="/images/products/jacob/jacob_slider.webp" alt="product-banner" />
        <section className="section-products pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>Morris Coupling</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {MORRIS_PRODUCTS.map(item => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}