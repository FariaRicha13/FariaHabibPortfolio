
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/images/color-sharp.png"
export const Research = () => {
    
    return (
        <section className="research" id="research">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Research Projects</h2>
                        <p>Since the beginning of my third year of university, my interest in research has grown. My main areas of research interest are software engineering and development, human computer interfaces, and data analytics. I also like learning about and working in other technological areas, such as: artificial intelligence, machine learning, and robotics.</p>
                      <div className='container'>
                        <div className='subcontainer'>
                            <h4> <a href='https://ieeexplore.ieee.org/abstract/document/9824116'>Exploring design attributes and development of an acoustic vr game to improve ethical values of visually impaired people </a>
                            </h4>
                            <p>This research aims to develop an acoustic virtual reality (VR) game for visually impaired individuals to enhance their ethical values and situational awareness. The evaluation study shows moderate effectiveness and efficiency, with a high recommendation rate of 87% among participants.</p>
                        </div>
                        <div className='subcontainer'>
                            <h4> <a href='https://link.springer.com/chapter/10.1007/978-3-031-20364-0_15'>Evaluating usability of mobile financial applications used in bangladesh </a>
                            </h4>
                            <p> This research evaluates the usability of popular mobile banking applications in Bangladesh to address the digital illiteracy among mobile phone users. Four common usability issues were identified, and unique issues were found in each application. The findings were used to create design requirements and improve the usability of the applications.</p>
                        </div>
                        <div className='subcontainer'>
                            <h4> Caremother: An Innovative Assistive System for Expecting Women
                            </h4>
                            <p>A mobile IoT application developed to assist expectant mothers in monitor essential health parameters such as their blood pressure, heart rate, temperature, sleep cycle, and location, ensuring the safety of the expectant mother and the unborn child.</p>
                        </div>
                        <div className='subcontainer'>
                            <h4> A Blockchain-based Framework to Develop a Sustainable Supply Chain Management System for Apparel Industry 
                            </h4>
                            <p> To overcome the existing constraints of the current supply chain management system that have been identified in literature elicitation & survey, a blockchain-based framework is being proposed for developing a supply chain management system for the textile industry.</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>

    );
}