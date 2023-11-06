import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import MainSlider from "../components/MainSlider";
import Title from "../components/Title";
import Cta from "../components/Cta";
import CircleWrapper from "../components/CircleWrapper";
import CustomerItem from "../components/CustomerItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/banner.css"
import "../styles/button.css"

const INDUSTRIES_SERVE = [
  {
    id: 1,
    image: '/images/food.png',
    icon: '/images/food-icon.png',
    title: 'Food & Beverage'
  },
  {
    id: 2,
    image: '/images/dairy.png',
    icon: '/images/dairy-icon.png',
    title: 'Dairy'
  },
  {
    id: 3,
    image: '/images/sugar.png',
    icon: '/images/sugar-icon.png',
    title: 'Sugar & Starch'
  },
  {
    id: 4,
    image: '/images/chemical.png',
    icon: '/images/chemical-icon.png',
    title: 'Chemical'
  },
  {
    id: 5,
    image: '/images/petrochemical.png',
    icon: '/images/petrochemical-icon.png',
    title: 'Petrochemical'
  },
  {
    id: 6,
    image: '/images/pharmaceutical.png',
    icon: '/images/pharmaceutical-icon.png',
    title: 'Pharmaceutical'
  },
]

const slickSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  adaptiveHeight: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const CUSTOMERS = [
  {
    id: 1,
    image: "images/customer/1.AAVIN.png",
    altText: "Aavin"
  },
  {
    id: 2,
    image: "images/customer/2.Abbott.png",
    altText: "Abbott"
  },
  {
    id: 3,
    image: "images/customer/3.AKZO_NOBEL.png",
    altText: "Akzo nobel"
  },
  {
    id: 4,
    image: "images/customer/4.AMUL.png",
    altText: "Amul"
  },
  {
    id: 5,
    image: "images/customer/5.ANDRITZ.jpg",
    altText: "Andritz"
  },
  {
    id: 6,
    image: "images/customer/6.APOLLO_TYRES_LTD.png",
    altText: "Apollo tyres"
  },
  {
    id: 7,
    image: "images/customer/7.ASIAN_PAINTS_LIMITED.webp",
    altText: "Asian paints"
  },
  {
    id: 8,
    image: "images/customer/8.AUROBINDO_PHARMA_LIMITED.png",
    altText: "Aurobindo pharma"
  },
  {
    id: 9,
    image: "images/customer/9.AXTEL_INDUSTRIES_LIMITED.png",
    altText: "Axtel"
  },
  {
    id: 10,
    image: "images/customer/10.BALAJI_WAFERS_PRIVATE_LIMITED.png",
    altText: "Balaji wafers"
  },
  {
    id: 11,
    image: "images/customer/11.BASF_INDIA_LIMITED.png",
    altText: "BASF india"
  },
  {
    id: 12,
    image: "images/customer/12.BUHLER_INDIA_PVT_LTD.png",
    altText: "Buhler india"
  },
  {
    id: 13,
    image: "images/customer/13.CARGILL_INDIA_PRIVATE_LIMITED.png",
    altText: "Cargill india"
  },
  {
    id: 14,
    image: "images/customer/14.COPERION.png",
    altText: "Coperion"
  },
  {
    id: 15,
    image: "images/customer/15.CYBERNETIK_T_CHNOLOGIES_PVT_LTD.png",
    altText: "CYBERNETIK T CHNOLOGIES PVT LTD"
  },
  {
    id: 16,
    image: "images/customer/16.DEC_GROUP.png",
    altText: "DEC GROUP"
  },
  {
    id: 17,
    image: "images/customer/17.DIVIS_LABOR_TORIES_LTD.png",
    altText: "DIVI'S LABOR TORIES LTD"
  },
  {
    id: 18,
    image: "images/customer/18.GALAXY_SURFACTANTS_LTD.jpg",
    altText: "GALAXY SURFACTANTS LTD"
  },
  {
    id: 19,
    image: "images/customer/19.GEA_PROCESS_ENGINEERING_INDIA_PVT_LTD.png",
    altText: "GEA PROCESS ENGINEERING INDIA PVT LTD"
  },
  {
    id: 20,
    image: "images/customer/20.HATSUN_AGRO_PRODUCT_LIMITED.png",
    altText: "HATSUN AGRO PRODUCT LIMITED"
  },
  {
    id: 21,
    image: "images/customer/21.ICE_ASIA_PRIVATE_LIMITED.png",
    altText: "ICE ASIA PRIVATE LIMITED"
  },
  {
    id: 22,
    image: "images/customer/22.LARSEN_&_TOUBRO_LIMITED.png",
    altText: "LARSEN & TOUBRO LIMITED"
  },
  {
    id: 23,
    image: "images/customer/23.LAURUS_LABS_LIMITED.png",
    altText: "LAURUS LABS LIMITED"
  },
  {
    id: 24,
    image: "images/customer/24.MAHAAN_MILK_FOODS_LIMITED.png",
    altText: "MAHAAN MILK FOODS LIMITED"
  },
  {
    id: 25,
    image: "images/customer/25.MILKY_MIST_DAIRY_FOOD_PVT_LTD.png",
    altText: "MILKY MIST DAIRY FOOD PVT LTD"
  },
  {
    id: 26,
    image: "images/customer/26.MONDELEZ.jpg",
    altText: "MONDELEZ"
  },
  {
    id: 27,
    image: "images/customer/27.NARASUS_SAARATHY_ENTERPRISES_PRIVATE_LIMITED.png",
    altText: "NARASUS SAARATHY ENTERPRISES PRIVATE LIMITED"
  },
  {
    id: 28,
    image: "images/customer/28.NESTLE_INDIA_LIMITED.svg",
    altText: "NESTLE INDIA LIMITED"
  },
  {
    id: 29,
    image: "images/customer/29.PAUL_TECHNO_PROCESS.jpg",
    altText: "PAUL TECHNO PROCESS"
  },
  {
    id: 30,
    image: "images/customer/30.PRASAD_GROUP.png",
    altText: "PRASAD GROUP"
  },
  {
    id: 31,
    image: "images/customer/31.RIECO_INDUSTRIES_LTD.png",
    altText: "RIECO INDUSTRIES LTD"
  },
  {
    id: 32,
    image: "images/customer/32.SCHREIBER_DYNAMIX.png",
    altText: "SCHREIBER DYNAMIX"
  },
  {
    id: 33,
    image: "images/customer/33.SPX_FLOW.png",
    altText: "SPX FLOW"
  },
  {
    id: 34,
    image: "images/customer/34.SUDARSHAN_CHEMICAL_INDUSTRIES.png",
    altText: "SUDARSHAN CHEMICAL INDUSTRIES"
  },
  {
    id: 35,
    image: "images/customer/35.TETRA-PAK.png",
    altText: "TETRA PAK"
  },
  {
    id: 36,
    image: "images/customer/36.UNIJET.png",
    altText: "UNIJET"
  },
  {
    id: 37,
    image: "images/customer/37.VB_ENGINEERS.webp",
    altText: "VB ENGINEERS"
  },
  {
    id: 38,
    image: "images/customer/38.ZEPPELIN_SYSTEMS_INDIA_PVT_LTD.jpg",
    altText: "ZEPPELIN SYSTEMS INDIA PVT LTD"
  },
]

export default function Home() {
  return (
    <>
      <section className="banner">
        <MainSlider />
      </section>
      <section className="section-serve">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Title>Industries We Serve</Title>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} className="g-4">
            {INDUSTRIES_SERVE.map(item => <CircleWrapper key={item.id} {...item} />)}
          </Row>
        </Container>
      </section>
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
                <p>
                  <strong>Airlock India Pvt Ltd</strong> supplies a complete range of pneumatic conveying components of high quality to various industries with the main focus in the ASEAN region.
                </p>
                <p>At Airlock India we are totally committed to meet customer’s solids handling requirements to their highest expectations. Assurance can be taken from the fact that the products handled by Airlock are internationally recognized in the Food, Dairy, Pharmaceutical, Chemical and other process industries with its engineering, quality and solids handling know-how built up over years of experience.</p>
                <p>We stock Airlock Brand Valves, BFM Fittings, SOLIMAR Fluidizers, JACOB and MORRIS range of components in our India facility.</p>
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
      <section className="section-partner">
        <Container>
          <Row>
            <Col lg={12}>
              <Title>Our Partners</Title>
            </Col>
          </Row>
          <div className="grid align-items-center mt-5">
            <div className="partner">
              <img src="/images/P&A.png" alt="P&A logo" />
            </div>
            <div className="partner">
              <img src="/images/BFMFitting.svg" alt="BFM logo" />
            </div>
            <div className="partner">
              <img src="/images/jacob.jpg" alt="jacob logo" />
            </div>
            <div className="partner">
              <img src="/images/steriValves-logo-dark.png" alt="steriValves logo" />
            </div>
            <div className="partner">
              <img src="/images/solimar-logo.svg" alt="solimar logo" />
            </div>
            <div className="partner">
              <img src="/images/eclipsce_logo.svg" alt="eclipsce logo" />
            </div>
            <div className="partner">
              <img src="/images/morris_coupling_logo.png" alt="morris coupling logo" />
            </div>
          </div>
          <Row>
            <Col lg={12}>
              <Cta message="Would you like to start a project with us?" path="/contact" btnText="Get in Touch" />
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ padding: "50px 0" }}>
        <Container>
          <Row>
            <Col lg={12}>
              <Slider {...slickSettings}>
                {CUSTOMERS.map(item => <CustomerItem key={item.id} {...item} />)}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );

}



