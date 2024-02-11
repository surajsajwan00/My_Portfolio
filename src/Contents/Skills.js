import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../Assets/img/meter1.svg";
import meter2 from "../Assets/img/meter2.svg";
import meter3 from "../Assets/img/meter3.svg";
import backside1 from "../Assets/img/bg-left.jpg";
import backside2 from "../Assets/img/bg-right.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have a solid foundation in languages such as Java, C, C++, Python, R, HTML, CSS, Dart, and React Javascript, as well as a strong knowledge of technologies such as TensorFlow, PyTorch, Keras, and Django, which allows me to tackle a wide range of diverse projects. I bring a versatile toolkit to the table. My experience includes handling databases on platforms like as MySQL and MongoDB, as well as using cloud services like Firebase. I thrive in collaborative workplaces and I am proficient with version control software such as Git and GitHub. I'm always extending my expertise, having recently completed the IBM Machine Learning Course on Coursera.

My interests range across different disciplines, including Full Stack Development, App Development, Data Analysis, and Deep Learning. <br></br> With a strong emphasis on problem solving, creativity, teamwork, and adaptability, I bring a diverse mix of soft skills to any project or team setting. Whether it's developing creative solutions, effectively cooperating with colleagues, or adapting to changing conditions, I'm dedicated to providing excellent outcomes with a positive attitude and collaborative spirit. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="img1" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img2" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img3" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img4" />
                                <h5>Web development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img5" />
                                <h5>App development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="img6" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img7" />
                                <h5>Deep Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img8" />
                                <h5>NLP</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img9" />
                                <h5>Data Analysis</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={backside1} alt="bgl-img" />
        <img className="background-image-right" src={backside2} alt="bgr-img" />
    </section>
  )
}
