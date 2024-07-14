import Button from 'react-bootstrap/Button'
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import CarouselFade from './modules/project_carousel';
import QuoteCarousel from './modules/quote_carousel';
import linkedIn from './imgs/linkedIn.png';
import Education from './modules/education';
import WorkHistory from './modules/work_history';
import KSAOs from './modules/ksaos';
import Accomplishments from './modules/accomplishments';
import AboutMe from './modules/about_me'


// can use function(props) and props.text or destructure props objects like below
function OutlineBttn({text, color, id=''}) {
  return (
    <>
      <Button onClick={() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }}
      variant={color} size="lg">{text}</Button>
    </>
  );
}

function Resume({resumeContent}) {
  
  return (
    <div>
      {resumeContent}
    </div>
  )
}

function Footer(props) {
  return (
    <footer style={{ textAlign: "center"}}>
      <p><a style={{ float: "left" }} href={"https://www.linkedin.com/in/sam-waychoff-1b4425229/"} target='_blank' rel="noreferrer"><img src={linkedIn}
        alt="LinkedIn Profile" /></a><span>© {props.year} Sam Waychoff. All rights reserved.</span></p>
    </footer>
  )
}


function App() {

  // set content module for resume element
  const [content, setContent] = useState(Education);

  const bckgrndClr = '#851930'

  // set button colors for resume menues onclick
  const [color1, setColor1] = useState(bckgrndClr);
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const actBtn = bckgrndClr;

  function btnActive(btn) {
    switch (btn) {
      case "edu":
        setColor1(actBtn);
        setColor2('');
        setColor3('');
        setColor4('');
        break;

      case "work":
        setColor1('');
        setColor2(actBtn);
        setColor3('');
        setColor4('');
        break;

      case "ksaos":
        setColor1('');
        setColor2('');
        setColor3(actBtn);
        setColor4('');
        break;

      case "accompl":
        setColor1('');
        setColor2('');
        setColor3('');
        setColor4(actBtn);
        break;

      // no default
    };
  }

  return (
    <div className="App">
      <header className="banner" id="banner">
        <Row className='banner-content'>
          <Col style={{ paddingLeft: "50px" }}>
            <div className="p-2 shadows-into-light-regular gentle-shake">Sam Waychoff</div><span className='p-1'>, MBT</span>
          </Col>
          <Col>
            <div className="p-3"><OutlineBttn text="Projects" color='dark' id='proj-ttl' /></div>
            <div className="p-3"><OutlineBttn text="Resume" color='outline-light' id='resume' /></div>
            <div className="p-3"><OutlineBttn text="About Me" color='outline-dark' id='about_title' /></div>
          </Col>
        </Row>
      </header>
      <body>
        <Container className='body'>
          <AboutMe />
          <Row>
            <Col style={{ margin:"30px 0", padding: "25px 0" }}>
              <QuoteCarousel />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="title-1 shadows-into-light-regular" id='resume'>Resume</div>
            </Col>
          </Row>
          <Row>
            <Col className='resume_menu'>
              <Button variant="secondary" style={{ background: color1 }} onClick={() => { setContent(Education); btnActive('edu') }}>Education</Button>{' '}
              <Button variant="secondary" style={{ background: color2 }} onClick={() => { setContent(WorkHistory); btnActive('work') }}>WorkHistory</Button>{' '}
              <Button variant="secondary" style={{ background: color3 }} onClick={() => { setContent(KSAOs); btnActive('ksaos') }}>KSAOs</Button>{' '}
              <Button variant="secondary" style={{ background: color4 }} onClick={() => { setContent(Accomplishments); btnActive('accompl') }}>Accomplishments</Button>{' '}
            </Col>
            <Col>
            </Col>
            <Col> 
            </Col>
          </Row>
          <Row>
            <Col>
              <section className='resume'>
                <Resume resumeContent = {content}/>
              </section>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="title-1 shadows-into-light-regular" id="proj-ttl">Projects</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='carousel' id='projects'>{CarouselFade()}</div>
            </Col>
          </Row>  
        </Container>
      </body>
      <div className='footer'>
        <Row>
          <Col>
            <Footer year={new Date().getFullYear()}/>
          </Col>
        </Row>
      </div>  
    </div>
  );
}

export default App;
