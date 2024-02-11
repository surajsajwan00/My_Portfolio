import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Reach out to me </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col lg={12} md={6} xl={7}>
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
              <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="form-control mr-2" />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
