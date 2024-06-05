import 'animate.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bts from "../Assets/img/Project/tracking_system.png";
import aps from "../Assets/img/Project/Automated parking system.png";
import ds from "../Assets/img/Project/digital seganography.png";
import ra from "../Assets/img/Project/rider app.png";
import pronlp from "../Assets/img/Project/NLP product.png";
import srs from "../Assets/img/Project/Speech Emotion Recognition.png";
import hgr from "../Assets/img/Project/Hand Gesture Recognition.png";
import iu from "../Assets/img/Project/image upscaling.png";
import backside1 from "../Assets/img/bg-left.jpg";
import backside2 from "../Assets/img/bg-right.jpg";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Analytics of Products using NLP",
      description: "The portal allows users to enter product descriptions to identify comparable items with consumer feedback. NLP insights enable to comprehend preferences, which aids decision-making and competitive analysis. Clients can visualize the data for clarity",
      imgUrl: pronlp,
      githubUrl: "https://github.com/surajsajwan00/Analysis-of-products-using-NLP",
    },
    {
      title: "Bus Tracking System",
      description: "A bus tracking application uses FlutterMap and the Openrouteservice API to provide real-time location updates. Users may track buses and anticipate arrivals, providing seamless and convenient boarding experiences",
      imgUrl: bts,
      githubUrl: "https://github.com/surajsajwan00/Bus-Tracking-system",
    },
    {
      title: "Automated Parking System",
      description: "Developed a CNN-based ALPR model and a smart parking allocation algorithm to optimize space utilization and reduce traffic in automated parking systems. Enhanced user experience with real-time email notifications for parking space availability",
      imgUrl: aps,
      githubUrl: "https://github.com/surajsajwan00/Automated-parking-system",
    },
  ];

  const projects2 = [
    {
      title: "Digital Steganography",
      description: "A cutting-edge hybrid steganography solution ensures solid data security for text, images, and handwritten language by discreetly inserting important information, successfully safeguarding it against potential cyber threats",
      imgUrl: ds,
      githubUrl: "https://github.com/surajsajwan00/Digital-Steganography-Using-JAVA",
    },
    {
      title: "Rider App",
      description: "This is a flutter application maintains rider records",
      imgUrl: ra,
      githubUrl: "https://github.com/surajsajwan00/rider_app",
    },
    {
      title: "Speech Emotion Recognition",
      description: "Speech Emotion Recognition (SER) aims to identify human emotions and affective states through speech by analyzing tone and pitch. This technology leverages the natural phenomenon used by animals like dogs and horses to understand human emotions",
      imgUrl: srs,
      githubUrl: "https://github.com/surajsajwan00/Speech-emotion-recognition",
    },
  ];

  const projects3 = [
    {
      title: "Custom Hand Gesture Recognition",
      description: "Developed a Custom Hand Gesture Recognition system using Convolutional Neural Networks (CNN) to enable intuitive and seamless human-computer interaction, enhancing user experience and expanding the possibilities of gesture-based controls",
      imgUrl: hgr,
      githubUrl: "https://github.com/surajsajwan00/PRAD-2024/tree/main/Hand%20Gesture%20Recognition",
    },
    {
      title: "Image Upscaling",
      description: "Developed an advanced Image Upscaling system utilizing Generative Adversarial Networks (GANs) to enhance image resolution and detail, delivering superior visual quality and transforming the way images are experienced",
      imgUrl: iu,
      githubUrl: "https://github.com/surajsajwan00/PRAD-2024/blob/main/Image%20Upscaling/Image-upscaling%20using%20GAN.ipynb",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Dive into the scope of my work, where a diverse range of projects thrive across numerous fields and cutting-edge technologies. Our endeavours, including app development, digital solutions, and artificial intelligence, showcase our creativity and skill.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <Col key={index} md={6} lg={4} className="mb-4">
                              <ProjectCard {...project} />
                            </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <Col key={index} md={6} lg={4} className="mb-4">
                              <ProjectCard {...project} />
                            </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <Col key={index} md={6} lg={4} className="mb-4">
                              <ProjectCard {...project} />
                            </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={backside1} alt="bgl-img" />
      <img className="background-image-right" src={backside2} alt="bgr-img" />
    </section>
  )
}
