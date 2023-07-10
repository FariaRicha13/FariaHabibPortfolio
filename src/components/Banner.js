import React, { Component } from 'react';
import Pdf from '../assets/Faria_Habib.pdf';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/FHPic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
 
  const [activeLink, setActiveLink] = useState('home');
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Quality Assurance Engineer", "Software Developer Aspirant", "Researcher" ];
  const period = 2000;
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleViewPDF = () => {
    window.open(Pdf);
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Faria`}  <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Quality Assurance Engineer", "Software Developer Aspirant", "Researcher"]'><span className="wrap">{text}</span></span></h1>
                  <p>This is me, Faria Habib. I work as a software QA engineer in Dhaka, Bangladesh. I'm quite passionate about learning more about various topics and working with different technological stacks. I am highly interested in conducting technical research. I enjoy traveling, drinking coffee, and listening to music.  </p>
               
               <div className="btn-2"><button onClick={handleViewPDF} >View Resume<ArrowRightCircle size={25} onClick={() => onUpdateActiveLink('contact')} /></button></div>   
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}