import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const ECLIPSE_PRODUCTS = [
    {
        id: 1,
        productName: "Eclipse Housed Grid",
        imageUrl: "/images/products/eclipse/eclipse_housed_grid.webp",
        pdf: "/images/products/eclipse/eclipse_housed_grid.pdf"
    },
    {
        id: 2,
        productName: "Eclipse Liquid Magnetic Separator",
        imageUrl: "/images/products/eclipse/eclipse_liquid_magnetic_separator.webp",
        pdf: "/images/products/eclipse/eclipse_liquid_magnetic_separator.pdf",
    },
    {
        id: 3,
        productName: "Eclipse Rota Grid",
        imageUrl: "/images/products/eclipse/eclipse_rota_grid.webp",
        pdf: "/images/products/eclipse/eclipse_rota_grid.pdf",
    },
    {
        id: 4,
        productName: "Eclipse Pnuemag",
        imageUrl: "/images/products/eclipse/eclipse_pnuemag.webp",
        pdf: "/images/products/eclipse/eclipse_pnuemag.pdf",
    },
    {
        id: 5,
        productName: "Autoshuttle",
        imageUrl: "/images/products/eclipse/autoshuttle.webp",
        pdf: "/images/products/eclipse/autoshuttle.pdf",
    },
]


export default function Eclipse() {
    return <>
        <PageBanner imageUrl="/images/products/jacob/jacob_slider.webp" alt="product-banner" />
        <section className="section-products pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>Eclipse Magnetics</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {ECLIPSE_PRODUCTS.map(item => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}