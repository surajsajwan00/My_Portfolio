import 'animate.css';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const ContactInfo = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/Contact_info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="Contact_info" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="d-flex align-items-start">
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <h2 className="mb-4">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col size={12} sm={6} className="px-1">
              <input 
                type="text" 
                value={formDetails.firstName} 
                placeholder="First Name" 
                onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                className="form-control" 
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input 
                type="text" 
                value={formDetails.lastName} 
                placeholder="Last Name" 
                onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                className="form-control" 
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input 
                type="email" 
                value={formDetails.email} 
                placeholder="Email Address" 
                onChange={(e) => onFormUpdate('email', e.target.value)} 
                className="form-control" 
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input 
                type="tel" 
                value={formDetails.phone} 
                placeholder="Phone No." 
                onChange={(e) => onFormUpdate('phone', e.target.value)} 
                className="form-control" 
              />
            </Col>
            <Col size={12} className="px-1">
              <textarea 
                rows="6" 
                value={formDetails.message} 
                placeholder="Message" 
                onChange={(e) => onFormUpdate('message', e.target.value)} 
                className="form-control" 
              ></textarea>
            </Col>
            <Col size={12} className="px-1">
              <button type="submit" className="btn btn-primary"><span>{buttonText}</span></button>
            </Col>
            {status.message && (
              <Col size={12} className="px-1">
                <p className={status.success ? "success" : "danger"}>{status.message}</p>
              </Col>
            )}
          </Row>
        </form>
      </div>}
  </TrackVisibility>
</Col>
        </Row>
      </Container>
    </section>
  )
}
