import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/FariaHabibLogo.jpg';
import navIcon1 from '../assets/images/icons8-github.svg';
import navIcon2 from '../assets/images/icons8-google-scholar.svg';
import navIcon3 from '../assets/images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png';
import navIcon4 from '../assets/images/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-24.png';
import navIcon5 from '../assets/images/icons8-linkedin.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#research" className={activeLink === 'research' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('research')}>Researches</Nav.Link>
              <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('achievements')}>Expertise & Background</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/FariaRicha13"><img src={navIcon1} alt="" /></a>
                <a href="https://scholar.google.com/citations?user=GTFtcCsAAAAJ&hl=en"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/FariaHabibRicha/"><img src={navIcon3} alt="" /></a>
                <a href="https://codeforces.com/profile/fariaricha"><img src={navIcon4} alt="" /></a>
                <a href="https://www.linkedin.com/in/faria-habib/"><img src={navIcon5} alt="" /></a>
              </div>
         
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  )
}