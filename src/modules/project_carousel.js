import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import blueSky from '../imgs/blueSky.png';
import gDg from '../imgs/gdg.png';
import cloudComp from '../imgs/cloudComp.png';
import bmiCalc from '../imgs/BMI-calculator.jpg';
import gem from '../imgs/gem.jpg';
import resumeSite from '../imgs/resumeSite.png';

function HrefNote() {
    return (
        <i className='c_text'>(Click on background image to navigate to website.)</i>
    )
}

function CarouselFade() {
    return (
        <Carousel interval={10000}>
            <Carousel.Item className='carousel_bckgrnd'>
                <a href="https://github.com/samwaych/BlueSkyApp" target='_blank' rel="noreferrer">
                    <img className='c_image' 
                    src={blueSky}
                    alt="Blue Sky Cleaning Company"
                    /></a>
                <Carousel.Caption>
                    <div className="c_textblock">
                    <h3>Blue Sky Cleaning Company</h3>
                    <p className='c_text'>
                        A mobile first web app designed using a MERN (Mongo, Express, React, Node) stack for a Commercial and Residential cleaning company located in Florida. 
                        The scope of this project was to deliver a working prototype to the business owner to fulfill user requirements as part of 
                        a year-long capstone project for the Business & Technology graduate program at UGA Terry College. 
                    </p>
                    <HrefNote/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_bckgrnd'>
                <a href="https://samwaych.github.io/gameDataGallery/" target='_blank' rel="noreferrer">
                    <img className='c_image'
                    src={gDg}
                    alt="Game Data Gallery Website"
                    /></a>
                <Carousel.Caption>
                    <div className="c_textblock">
                        <h3>Game Data Gallery Website</h3>
                        <p className='c_text'>This was a side project I used for practicing HTML5 programming and server implementation. The site is a single
                            page utilizing a customized Bootstrap framework, a bit of jQuery, an Express server as middleware, and two digital game 
                            database APIs, RAWG & Steam Store. The goal was to create a video game search page that combined the huge multi-platform 
                            game data of RAWG with information from the popular steam digital games storefront. 
                        </p>
                        <HrefNote/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_bckgrnd'>
                <a href="https://samwaych.github.io/CloudComputing/index.html" target="_blank" rel="noreferrer">
                    <img className='c_image'
                    src={cloudComp}
                    alt="Cloud Computing Website"
                    /></a>
                <Carousel.Caption>
                    <div className="c_textblock">
                    <h3>Cloud Computing Website</h3>
                        <p className='c_text'>
                            A website built to demonstrate conceptual & working knowledge of HTML and CSS. This was part of a coursework 
                            assignment for the Business & Technology graduate program at UGA Terry College.
                        </p>
                        <HrefNote />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_bckgrnd'>
                <a href="https://samwaych.github.io/BMI-Calculator/" target="_blank" rel="noreferrer">
                    <img className='c_image'
                        src={bmiCalc}
                        alt="BMI Calculator Website"
                    /></a>
                <Carousel.Caption>
                    <div className="c_textblock">
                        <h3>BMI Calculator Website</h3>
                        <p className='c_text'>
                            A minimalistic website built to provide a functional BMI calculator. The purpose of the project was to demonstrate 
                            working knowledge of Bootstrap & Javascript. This was part of a coursework
                            assignment for the Business & Technology graduate program at UGA Terry College.
                        </p>
                        <HrefNote />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_bckgrnd'>
                <a href="https://samwaych.github.io/HiddenGemGame/" target="_blank" rel="noreferrer">
                    <img className='c_image'
                        src={gem}
                        alt="Hidden Gem Game"
                    /></a>
                <Carousel.Caption>
                    <div className="c_textblock">
                        <h3>Hidden Gem</h3>
                        <p className='c_text'>
                            A simple website built to create a functional  hide-and-seek type game. The purpose of the project was to demonstrate
                            working knowledge of HTML & Javascript. This was part of a coursework
                            assignment for the Business & Technology graduate program at UGA Terry College.
                        </p>
                        <HrefNote />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_bckgrnd'>
                <img className='c_image'
                    src={resumeSite}
                    alt="Resume Website"
                />
                <Carousel.Caption>
                    <div className="c_textblock">
                        <h3>Resume Website</h3>
                        <p className='c_text'>
                            The current website was built to create an online profile showcasing my professional history & development. Built from scratch, this 
                            project utilizes the React framework, custom Bootstrap, and HTML5 to create a single-page site that dyanmically updates elements without the need to 
                            reload the entire DOM or navigate to a new page like a typical website. 
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;
