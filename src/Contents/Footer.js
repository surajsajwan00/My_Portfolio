import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../Assets/img/linkedin-icon.svg";
import navIcon2 from "../Assets/img/github-icon.svg";
import navIcon3 from "../Assets/img/mail-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/suraj-singh-sajwan-a02b90219/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/surajsajwan00"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
