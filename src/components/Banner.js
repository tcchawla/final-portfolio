import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "DevOps Engineer"];
    const[text, setText] = useState('');
    const[delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)
        return () => clearInterval(ticker);
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>
                            {`Hi, I'm Tarun Chawla `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <br></br>
                        <p>About Me!</p>
                        <p className="text-white">I'm a curious and creative problem solver with a passion for technology and a love for learning. My journey in the world of software engineering began with tinkering with computers and building my own websites as a hobby, and it has evolved into a career that brings me joy every day.</p>
                        <p className="text-white">I love to travel, explore new places, meeting new people. I believe that life is about balance, and that's why I strive to bring a healthy mix of hard work and fun into everything I do.</p>
                        <button 
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/tarun-c')
                            }}
                        >Let's Connect! <ArrowRightCircle size={25} /> 
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}