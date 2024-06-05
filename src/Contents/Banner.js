import 'animate.css';
import React, { useState, useEffect } from "react"; // Import React
import { Container, Row, Col } from "react-bootstrap";
import programmerImg from "../Assets/img/programmer.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  useEffect(() => {
    const toRotate = ["a Software Engineer ", "an AI/ML Engineer", "an App Developer"]; // Move initialization here

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
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, isDeleting]); // Remove 'toRotate' from dependency array

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Suraj Singh Sajwan</span>
                <h1>{`I am`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Software Engineer", "AI/ML Engineer", "App Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Highly organized and dependable professional who excels at handling several objectives with steadfast focus and a pleasant attitude. I am known for my strong work ethic and thrive in fast-paced workplaces, constantly delivering results while cultivating a collaborative team culture. Eager to take on extra duties in search of collaborative achievement</p>
                  <button onClick={() => {
                    const newsletterSection = document.getElementById('connect');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    </button>
                  <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/1OjovOlz7Ai-2Q9kt5YFHS3Fr1xhykgu0/view?usp=sharing'; 
                    link.download = 'Surajsinghsajwan_Resume.pdf'; 
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}>
                    My Resume <ArrowRightCircle size={25} />
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={programmerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
