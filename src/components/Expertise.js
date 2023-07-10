import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from '../assets/images/color-sharp.png'
import wicon from "../assets/images/workicon.png"
import eicon from "../assets/images/eduicon.png"
import { ArrowDownCircle } from 'react-bootstrap-icons';
import React, { useState } from 'react';
import '../BarLine.css';
  import { generateMeshGradient } from "https://cdn.skypack.dev/meshgrad";
import TrackVisibility from 'react-on-screen';
import { WindowDash } from "react-bootstrap-icons";
import { act } from "react-dom/test-utils";
import { Reveal } from "./Reveal";
export const Expertise = () => {
    const [activeButtons, setMyArray] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = (buttonId) => {

        setActiveButton(buttonId);
        setMyArray([...activeButtons, buttonId]);

        setShowContent(!showContent);


    };


    const handleMouseEnter = () => {
      setShowContent(true);
    };
  
    const handleMouseLeave = () => {
      setShowContent(false);
    };
  



    const spanStyle = {
        width: '90%',

    };
    const spanStyle2 = {
        width: '80%',

    };
    const spanStyle3 = {
        width: '85%',

    };

    const spanStyle4 = {
        width: '60%',

    };

    return (
        <section className="achievements" id="achievements">

            <Container>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Expertise & Background</h2>
                            <p>
Throughout my time as an undergraduate student and in professional career, I have worked with and learned about a variety of technological stacks. My major areas of competence are in several programming languages including Java, javascript, python, and various frameworks like spring-boot, react, android SDK, etc. Additionally, I now know how to use various CI/CD technologies to automate the development, deployment, and testing of my projects. In addition, I've learned about a variety of project management and data analysis technologies.</p>
                 
                            <div className="lang-frame">
                                <div className="title"  >
                             
                                <Reveal>   <div className="langFrame" ><h3> Languages & Frameworks </h3></div></Reveal> 
                                <button className="expand" onClick={() => handleButtonClick(1)} ><h5>View </h5></button>
                                    {showContent && activeButton === 1 && <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <div className="exp">
                                            <div className="skillName">
                                                <h5 >Java</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Springboot</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Javascript</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>ReactJS</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>C</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>C++</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Python</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle2}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>HTML & CSS</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="skillName">
                                                <h5>MySQL</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle} ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Cypress</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Selenium</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Postman</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Cucumber</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle2}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>JMeter</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle2} ></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                                <b>

                                </b>
                            </div>
                            <div className="cicd-tools">
                                <div className="title">

                                <Reveal> <div className="cicd"><h3> CI/CD Tools</h3></div></Reveal>   
                                <button className="expand" onClick={() => handleButtonClick(2)}><h5> View</h5></button>
                                    {showContent && activeButton === 2 && <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <div className="exp">
                                            <div className="skillName">
                                                <h5 >Jenkins</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Github</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Docker</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle}></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                                <b>

                                </b>
                            </div>
                            <div className="proj-tools">
                                <div className="title">


                                <Reveal>   <div className="proj" ><h3> Data & Business Analysis & Project Management Tools</h3></div> </Reveal>
                                <button className="expand" onClick={() => handleButtonClick(3)}><h5> View</h5></button> 
                                    {showContent && activeButton === 3 && <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <div className="exp">
                                            <div className="skillName">
                                                <h5>PowerBI</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle4} ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>BigQuery</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle4} ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Excel</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle3} ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Tableu</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle4} ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Jira</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle2}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skillName">
                                                <h5>Azure DevOps</h5>
                                                <div className="progressBar">
                                                    <p></p>
                                                    <div className="progress">
                                                        <span style={spanStyle4}></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                                <b>

                                </b>
                            </div>
                            <div className="bg">
                                <div className="title">

                                <Reveal>   <div className="bcg"><h3> Background</h3></div> </Reveal> 
                                <button className="expand" onClick={() => handleButtonClick(4)}><h5> View</h5></button>
                                    {showContent && activeButton === 4 && <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <div className="exp">

                                            <div className="sm-title">
                                                <div className="titlebar">
                                                    <p> <img className="icon" src={wicon} alt="Image" />

                                                        <h3>Work Experience</h3></p>

                                                </div>

                                            </div>


                                        </div>
                                        <div className="expContent">
                                            <div className="contentContainer">
                                                <div className="leftExpContent">
                                                    <h5>Software Quality Assurance Engineer</h5>
                                                    <a href="https://www.dsinnovators.com/"><h4>Dynamic Solution Innovators</h4></a>
                                                    <div className="listExp">
                                                        <ul>
                                                            <li>Developing End to End Aumation Scrtipts & Deploying them using CI/CD Pipeline</li>
                                                            <li>UI Automation & API, Performance, Behaviora Testing</li>
                                                            <li>Analyzing Issues & Developing Test Cases</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="rightExpContent">
                                                    <p>April 2022 - Present</p>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="exp">

                                            <div className="sm-title">
                                                <div className="titlebar">
                                                    <p> <img className="icon" src={eicon} alt="Image" />

                                                        <h3>Education</h3></p>

                                                </div>

                                            </div>


                                        </div>
                                        <div className="expContent">
                                            <div className="contentContainer">
                                                <div className="leftExpContent">

                                                    <h5>B.Sc. in Computer Science & Engineering (CSE)</h5>
                                                    <a href="https://mist.ac.bd/"><h4>Military Institute of Science & Technology</h4></a>
                                                    <div className="grade">
                                                        <p><b>CGPA: </b>3.31 out of 4.00</p>
                                                    </div>
                                                </div>
                                                <div className="rightExpContent">
                                                    <p>February 2018 - May 2022</p>
                                                </div>
                                            </div>
                                            


                                       
                                       
                                            <div className="contentContainer">
                                                <div className="leftExpContent">

                                                    <h5>Higher Secondary School Certificate (HSC)</h5>
                                                    <a href="https://www.vnsc.edu.bd/"><h4>Viqarunnisa Noon School & College</h4></a>
                                                    <div className="grade">
                                                        <p><b>GPA: </b>5.00 out of 5.00</p>
                                                    </div>
                                                </div>
                                                <div className="rightExpContent">
                                                    <p>2017</p>
                                                </div>
                                            </div>
                                            


                                   
                                       
                                            <div className="contentContainer">
                                                <div className="leftExpContent">

                                                    <h5>Secondary School Certificate (SSC)</h5>
                                                    <a href="https://iscm.edu.bd/"><h4>Ideal School & College</h4></a>
                                                    <div className="grade">
                                                        <p><b>GPA: </b>5.00 out of 5.00</p>
                                                    </div>
                                                </div>
                                                <div className="rightExpContent">
                                                    <p>2015</p>
                                                </div>
                                            </div>
                                            


                                            </div>
                                        
                                    </div>}
                                </div>
                                <b>

                                </b>
                            </div>

                        </div>

                    }
                </TrackVisibility>

            </Container>

        </section>
    )
}