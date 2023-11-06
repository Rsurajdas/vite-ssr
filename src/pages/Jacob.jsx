import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const JACOB_PRODUCTS = [
    {
        id: 1,
        productName: "Jacob 2 Ways Valve",
        imageUrl: "/images/products/jacob/jacob_2_ways_valve.webp",
        pdf: "/images/products/jacob/download_brochure.pdf",
    },
    {
        id: 2,
        productName: "Throttle Valve",
        imageUrl: "/images/products/jacob/throttle_valve.webp",
        pdf: "/images/products/jacob/download_brochure.pdf",
    },
    {
        id: 3,
        productName: "2 Way Distributor",
        imageUrl: "/images/products/jacob/2_way_distributor.webp",
        pdf: "/images/products/jacob/download_brochure.pdf",
    },
    {
        id: 4,
        productName: "Distributor",
        imageUrl: "/images/products/jacob/distributor.webp",
        pdf: "/images/products/jacob/download_brochure.pdf",
    },
    {
        id: 5,
        productName: "Quick Connect",
        imageUrl: "/images/products/jacob/quick_connect.webp",
        pdf: "/images/products/jacob/download_brochure.pdf",
    },
]


export default function Jacob() {
    return <>
        <PageBanner imageUrl="/images/products/jacob/jacob_slider.webp" alt="product-banner" />
        <section className="section-products">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>JACOB Pipework</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {JACOB_PRODUCTS.map(item => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}