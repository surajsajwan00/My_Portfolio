import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../Assets/img/linkedin-icon.svg";
import navIcon2 from "../Assets/img/github-icon.svg";
import navIcon3 from "../Assets/img/mail-icon.svg";
import pic from '../Assets/img/profile pic.jpg';

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
            <img src={pic} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/suraj-singh-sajwan-a02b90219/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/surajsajwan00"><img src={navIcon2} alt="" /></a>
                <a href="https://mail.google.com/mail/"><img src={navIcon3} alt="" /></a>
                
              </div>
              <a href="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}
