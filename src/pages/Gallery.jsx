import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../components/PageBanner";
import Title from "../components/Title";
import { Image } from "antd";
import "../styles/gallery.css"
import "../styles/button.css"

const GALLERY_IMAGES = [
    {
        id: 1,
        imageUrl: "/images/gallery/gallery_1.webp"
    },
    {
        id: 2,
        imageUrl: "/images/gallery/gallery_2.webp"
    },
    {
        id: 3,
        imageUrl: "/images/gallery/gallery_3.webp"
    },
    {
        id: 4,
        imageUrl: "/images/gallery/gallery_4.webp"
    },
    {
        id: 5,
        imageUrl: "/images/gallery/gallery_5.webp"
    },
    {
        id: 6,
        imageUrl: "/images/gallery/gallery_6.webp"
    },
    {
        id: 7,
        imageUrl: "/images/gallery/gallery_7.webp"
    },
    {
        id: 8,
        imageUrl: "/images/gallery/gallery_8.webp"
    },
    {
        id: 9,
        imageUrl: "/images/gallery/gallery_9.webp"
    },
    {
        id: 10,
        imageUrl: "/images/gallery/gallery_10.webp"
    },
    {
        id: 11,
        imageUrl: "/images/gallery/gallery_11.webp"
    },
    {
        id: 12,
        imageUrl: "/images/gallery/gallery_12.webp"
    },
    {
        id: 13,
        imageUrl: "/images/gallery/gallery_13.webp"
    },
    {
        id: 14,
        imageUrl: "/images/gallery/gallery_14.webp"
    },
]

export default function Gallery() {
    return <>
        <PageBanner imageUrl="/images/about-banner.png" alt="about-banner" />
        <section className="section-gallery">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Title sidelines={true}>Gallery</Title>
                    </Col>
                </Row>
                <div className="gallery-wrapper">
                    <Image.PreviewGroup preview={{ onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`) }}>
                        {GALLERY_IMAGES?.map(image => <Image key={image.id} src={image.imageUrl} />)}
                    </Image.PreviewGroup>
                </div>
            </Container>
        </section>
    </>
}

