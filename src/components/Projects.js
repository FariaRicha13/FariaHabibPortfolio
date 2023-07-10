import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/caremother.png";
import projImg2 from "../assets/images/acousticvr.png";
import projImg3 from "../assets/images/asma.png";
import projImg4 from "../assets/images/spring.jpeg";
import projImg5 from "../assets/images/twitter.jpeg";
import projImg6 from "../assets/images/imdb.jpg";
import projImg7 from "../assets/images/orangehrm.png";
import projImg8 from "../assets/images/selenium.jpg";
import projImg9 from "../assets/images/API-Testing.jpg";
import projImg10 from "../assets/images/cucumber.jpg";
import projImg11 from "../assets/images/performance.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title:  <a href="https://github.com/FariaRicha13/CareMother_Andriod_Mobile_App">CareMother: An Andorid Application</a>,
      description:"Design & Development",
      imgUrl: projImg1,
    },
    {
      title:<a href="https://github.com/FariaRicha13/Accoustic_VR_Android_Game"> Acoustic VR Game: An Andorid Application</a>,
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://github.com/FariaRicha13/ASMA">ASMA: A Web Application</a>,
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: <a href="https://github.com/FariaRicha13/SpringBootCrudApplication">SpringBoot CRUD Application : A Web Application</a>,
      description: "Design & Development",
      imgUrl: projImg4,
    },
    
  ];
  const project2 = [
    {
      title:  <a href="https://github.com/FariaRicha13/Sentiment-Analaysis-of-IMDB-Reviews">IMDB Reviewws Sentiment Analysis</a>,
      description:"Design & Development",
      imgUrl: projImg6,
    },
    {
      title:<a href="https://github.com/FariaRicha13/Opinion-Mining-of-tweets-related-to-Mental-Health"> Opinion Mining Using Tweets</a>,
      description: "Design & Development",
      imgUrl: projImg5,
    }
  ];
  const project3 = [
    {
      title:  <a href="https://github.com/FariaRicha13/Cypress_POM_OrangeHRM">Web UI Automation - Cypress</a>,
      description:"Design & Development",
      imgUrl: projImg7,
    },
    {
      title:<a href="https://github.com/FariaRicha13/TestNG_Assignment1"> Web UI Automation - Selenium</a>,
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title:<a href="https://github.com/FariaRicha13/DMoney_API_Testing_Postman"> Web API Automation - Postman</a>,
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title:<a href="https://github.com/FariaRicha13/DMoney_API_Testing_Postman"> Acceptance Automation - Cucumber-Selenium</a>,
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title:<a href="https://github.com/FariaRicha13/Random-User-API-Performance-Test">Performance Testing - JMeter</a>,
      description: "Design & Development",
      imgUrl: projImg11,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've developed a variety of web applications over the past few years using Java Springboot, Javascript, React, HTML, and CSS. Additionally, I built two large scaled Android applications for two of my key courses during undergrad tenure. I've also worked on a few projects involving data analysis. Additionally, I have carried out a lot of test automation projects throughout my professional career for my own personal growth.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Application Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Test Automation</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project3.map((project3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project3}
                                />
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}