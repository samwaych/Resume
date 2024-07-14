import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


function QuoteCarousel() {

    return (
        <Carousel controls={false} indicators={false} interval={12000} pause={false} fade={true} className="quote-carousel">
            <Carousel.Item>
                <div className='quote'>
                    <blockquote>"The first and most important choice a leader makes is the choice to serve, 
                        without which one's capacity to lead is severely limited."</blockquote>
                    <p className='quote-author'>— Robert Greenleaf, author and founder of the modern servant leadership movement</p>    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='quote'>
                    <blockquote>"I have no special talent, I am only passionately curious."</blockquote>
                    <p className='quote-author'>— Albert Einstein</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='quote'>
                    <blockquote>
                        "The secret to getting ahead is getting started. The secret of getting started is breaking your complex, 
                        overwhelming tasks into small manageable tasks, and then starting on the first one."
                    </blockquote>
                    <p className='quote-author'>— Mark Twain</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='quote'>
                    <blockquote>
                        "One important key to success is self-confidence. An important key to self-confidence is preparation."
                    </blockquote>
                    <p className='quote-author'>— Arthur Ashe, American professional tennis player</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default QuoteCarousel;
