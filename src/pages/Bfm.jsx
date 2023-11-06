import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import PageBanner from "../components/PageBanner";

const BFM_PRODUCTS = [
    {
        id: 1,
        productName: "Bulk Bag Loader",
        description: "A fully sealed, inflatable Bulk Bag Loading head that makes hygienic loading a breeze.",
        imageUrl: "/images/products/bfm/bulk_bag_loader.webp"
    },
    {
        id: 2,
        productName: "Blanking Cap",
        description: "Blanking caps can be used to prevent contamination during cleaning or change over, as well as being used as a viewing port.",
        imageUrl: "/images/products/bfm/blanking_cap.png"
    },
    {
        id: 3,
        productName: "Flexi-Earthed Connector",
        description: "Flexi-Earthed connector is made from an ether based polyurethane with a 316 stainless steel wire coil and terminal lugs at each end.",
        imageUrl: "/images/products/bfm/flexi_earthed.png"
    },
    {
        id: 4,
        productName: "FM1 Breather",
        description: "A 100% polyester needle felt breather bag designed for breathing applications such as venting hoppers and other contained vessels.",
        imageUrl: "/images/products/bfm/fm1_breather.png"
    },
    {
        id: 5,
        productName: "Kevlar Cover",
        description: "A flame retardant Kevlar Cover that fits over existing connectors. It is typically used in over pressure & potentially explosive applications to reduce the risk of fire.",
        imageUrl: "/images/products/bfm/kevlar_cover.png"
    },
    {
        id: 6,
        productName: "Black Out Cover",
        description: "Used in light-sensitive applications to cut out light. It is made from a polypropylene fibre that meets FDA requirements for textiles used in the processing of foods.",
        imageUrl: "/images/products/bfm/black_out_cover.png"
    },
    {
        id: 7,
        productName: "Seeflex 060ES Connector",
        description: "Pressure-resistant connector made from a clear, ether-based thermoplastic polyurethane alloy with polyester scrim.",
        imageUrl: "/images/products/bfm/seeflex_060ES.png"
    },
    {
        id: 8,
        productName: "Teflex NP Black Connector",
        description: "A pure PTFE flexible BFM® connector capable of running continuously at 300ºC (572ºF) temperatures, static dissipative (10^6), food grade and can be used across the full pH scale for caustic or acid products.",
        imageUrl: "/images/products/bfm/teflex_np_black.png"
    },
    {
        id: 9,
        productName: "Teflex NP Opaque Connector",
        description: "A semi-transparent, pure PTFE flexible BFM® connector capable of running continuously at 300ºC (572ºF) temperatures, food grade and can be used across the full pH scale for caustic or acid products.",
        imageUrl: "/images/products/bfm/teflex_np_opaque.png"
    },
    {
        id: 10,
        productName: "Quick Access Port",
        description: "A screw-in port added to the wall of a Seeflex 040E or 060ES connector that gives easy access for metal detector drop-test balls or to take product samples without interrupting product flow (or losing product in the process).",
        imageUrl: "/images/products/bfm/quick_access_port.webp"
    },
    {
        id: 11,
        productName: "Rings",
        description: "BFM® connectors can be fitted with stainless steel or plastic support rings to help keep the connector walls open.",
        imageUrl: "/images/products/bfm/steel_rings.png"
    },
    {
        id: 12,
        productName: "Tapered",
        description: "Tapered connectors can be created when having two equal-diameter spigots is not an option, or used as a hopper.",
        imageUrl: "/images/products/bfm/tapered_connector.png"
    },
    {
        id: 13,
        productName: "Blanking Sock / Bin",
        description: "Blanking bins/socks are ideal for sifter oversize collection. Can easily be lined with plastic bags to make disposal of waste clean and easy.",
        imageUrl: "/images/products/bfm/blanking_sockBin.png"
    },
    {
        id: 14,
        productName: "Seeflex 040E Connector",
        description: "Our most popular connector that can be used in most applications. Made from clear ether-based thermoplastic polyurethane alloy it has superior wear resistance for multiple applications. It is Atex Compliant and can be used in all dust explosion hazardous...",
        imageUrl: "/images/products/bfm/seeflex_040E_tool_release.png"
    },
    {
        id: 15,
        productName: "Corner Connector 040E",
        description: "A uniquely shaped corner connector made of clear, ether-based thermoplastic polyurethane alloy with a 110° bend to aid the drainage of CIP fluid from your process equipment.",
        imageUrl: "/images/products/bfm/corner_connector.webp"
    },
    {
        id: 16,
        productName: "Seeflex 020E Connector",
        description: "Our lightest connector made of clear, lightweight ether based thermoplastic polyurethane alloy, mainly used for weigh-scale type applications.",
        imageUrl: "/images/products/bfm/seeflex_020E.png"
    },
    {
        id: 17,
        productName: "Seeflex 040AS Connector",
        description: "Our anti-static connector made of semi-transparent ether-based thermoplastic polyurethane alloy with Anti-static infusion for use where static is a problem.",
        imageUrl: "/images/products/bfm/seeflex_040AS.png"
    },
    {
        id: 18,
        productName: "Flexi Connector",
        description: "The Flexi-Connector is made from an ether-based polyurethane with a 316 stainless steel wire coil. Ideal for bag feeders, filling heads or bulk bag fillers.",
        imageUrl: "/images/products/bfm/flexi.png"
    },
    {
        id: 19,
        productName: "Flexi Light Connector",
        description: "Flexi-Light is made from an ether-based polyurethane with a lighter 316 stainless steel wire coil than our standard Flexi, making it ideal for applications with lateral and vertical movement.",
        imageUrl: "/images/products/bfm/flexi_light.png"
    },
    {
        id: 20,
        productName: "LM3 Connector",
        description: "100% woven polypropylene, ideal for low temperature environments, down to -70°C (-94°F), FDA Certified for food contact.",
        imageUrl: "/images/products/bfm/LM3.png"
    },
    {
        id: 21,
        productName: "LM4 Connector",
        description: "100% woven polyester connector used in higher temperature environments up to 130°C / 266°F. Atex Compliant: IBExU tested. Can be used in all explosion hazardous areas.",
        imageUrl: "/images/products/bfm/LM4.png"
    },
    {
        id: 22,
        productName: "Teflex Woven Connector",
        description: "Pure woven PTFE; can be used in high temperature applications to 260°C / 500°F & with caustic or acid products. Compliant with: FDA 21 CFR 177.1550.",
        imageUrl: "/images/products/bfm/teflex_woven.png"
    },
]


export default function Bfm() {
    return <>
        <PageBanner imageUrl="/images/valve.png" alt="product-banner" />
        <section className="section-products">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>BFM</Title>
                    </Col>
                </Row>
                <Row className="mt-5 gy-4">
                    {BFM_PRODUCTS.map((item) => <ProductItem key={item.id} {...item} />)}
                </Row>
            </Container>
        </section>
    </>
}