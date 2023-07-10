
import { Reveal } from "./Reveal";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/images/icons8-github.svg';
import navIcon2 from '../assets/images/icons8-google-scholar.svg';
import navIcon3 from '../assets/images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png';
import navIcon4 from '../assets/images/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-24.png';
import navIcon5 from '../assets/images/icons8-linkedin.svg';

export const Contact = () => {
  

 

  return (
    <section className="contact" id="contact">
      
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
           
                <h2>Get In Touch</h2>
                
                <Reveal>    
                <div className="container">
                  <div className="emailCont">
                  <span class='sc-chPdSV fvJMHy'>
                   <h3>Mail Me: </h3>
                      <p>fariahricha1301@gmail.com</p>  
                 
                    </span>
                 
                    
                  </div>
                 
                  <div className="socialCont">
                  <span class='sc-chPdSV fvJMHy'>
                  <h3>Get Connet With Me </h3>
                   <div className="social-icon">
                <a href="https://github.com/FariaRicha13" className="github"><img src={navIcon1} alt="" /></a>
                <a href="https://scholar.google.com/citations?user=GTFtcCsAAAAJ&hl=en"className="gscholar"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/FariaHabibRicha/"className="lcode"><img src={navIcon3} alt="" /></a>
                <a href="https://codeforces.com/profile/fariaricha"className="cforces"><img src={navIcon4} alt="" /></a>
                <a href="https://www.linkedin.com/in/faria-habib/" className="link"><img src={navIcon5} alt="" /></a>
              </div>   
                 
                    </span>
                  </div>
                </div>
                </Reveal>
        
          </Col>
        </Row>
      </Container>
    </section>
  )
}