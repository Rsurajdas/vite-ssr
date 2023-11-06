import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const STERIVALVES_PRODUCTS = [
    {
        id: 1,
        productName: "Flexivalve",
        description: "FlexiValve is a valve with a silicone coated butterfly for the pharmaceutical, chemical and food industry.",
        imageUrl: "/images/products/sterivalves/flexivalve.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 2,
        productName: "Sanitary Butterfly Valve",
        description: "Sanitary butterfly valves can be used with solid, liquid or compressed gas products ensuring average seal in any application (up to 10 bar)",
        imageUrl: "/images/products/sterivalves/sanitary_butterfly_valves.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 3,
        productName: "Rotoflexi",
        description: "RotoFlexi is a rotary valve with silicone coated blades for pharmaceutical, chemical and food industry.",
        imageUrl: "/images/products/sterivalves/rotoflexi.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 4,
        productName: "Sterivalve",
        description: "Sterivalve is a butterfly valve for the pharmaceutical, chemical and food industry.",
        imageUrl: "/images/products/sterivalves/sterivalve.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 5,
        productName: "Rotovalve Light",
        description: "Rotovalve Light is a rotary valve for the pharmaceutical, chemical and food industry.",
        imageUrl: "/images/products/sterivalves/rotovalve_light.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 6,
        productName: "Rotovalve Plus",
        description: "The Rotovalve Plus is designed to aid the feeding and volumetric dosing of bulk solid products.",
        imageUrl: "/images/products/sterivalves/rotovalve_plus.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 7,
        productName: "Rotodoser",
        description: "Rotodoser is a solution designed for accurate dosing and consists of two concentric rotors of different volume individually operated.",
        imageUrl: "/images/products/sterivalves/rotodoser.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 8,
        productName: "Rotometering Valve",
        description: "The Rotometring valve is a fine dosing valve. It consists of two coaxial dosing parts (independently actuated), which determine flow of the product and its dosage.",
        imageUrl: "/images/products/sterivalves/rotometering.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 9,
        productName: "High Containment Sterisplit",
        description: "SteriSplit is a high-containment butterfly valve designed to transfer powders in safety for sterile or potentially toxic products.",
        imageUrl: "/images/products/sterivalves/sterisplit.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
    {
        id: 10,
        productName: "Rotocrusher",
        description: "It is a lump breaker Its output covers a flow rate ranging from a 750 kg/h minimum to a 3 t/h maximum.",
        imageUrl: "/images/products/sterivalves/rotocrusher.webp",
        pdf: "/images/products/sterivalves/click_to_download.pdf"
    },
]


export default function Sterivalves() {
    return <>
        <PageBanner imageUrl="/images/valve.png" alt="product-banner" />
        <section className="section-products">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>Sterivalves</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {STERIVALVES_PRODUCTS.map(item => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}