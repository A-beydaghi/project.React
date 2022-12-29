
import './Slide.css'
import Image41 from './Image/41.jpg'
import Image51 from './Image/51.jpg'
import Image24 from './Image/24.jpg'
import Image233 from './Image/233.jpg'
import Image300 from './Image/300.jpg'

function Slideshow() {
    return (
        <div className="Slideshow">
            <div className="container">
                <div className="w-50 mx-auto my-3 text-center">
                    <h1>My slideshow</h1>
                    <p>My slideshow written in html, css and havascript.</p>
                    <hr />
                    <div className="slideshow">
                        <div className="slides">
                            <div className="slide active">
                                <img src={Image41} alt="My beautiful table." />
                                <div>
                                    <p><a href="https://www.toyota.com/">Toyota</a></p>
                                </div>
                            </div>
                            <div className="slide">
                                <img src={Image51} alt="My beautiful nature." />
                                <div>
                                    <p><a href="https://www.porsche.com/">Porsche</a></p>
                                </div>
                            </div>
                            <div className="slide">
                                <img src={Image24} alt="My beautiful eagle." />
                                <div>
                                    <p><a href="https://www.mercedes-benz.com/">Mersedes benz</a></p>
                                </div>
                            </div>
                            <div className="slide">
                                <img src={Image233} alt="My beautiful dog." />
                                <div>
                                    <p><a href="https://www.bmw.com/">Bmw</a></p>
                                </div>
                            </div>
                            <div className="slide">
                                <img src={Image300} alt="My beautiful cat." />
                                <div>
                                    <p><a href="https://www.ferrari.com/">Ferarri</a></p>
                                </div>
                            </div>
                            <span className="prev">&#10094;</span>
                            <span className="next">&#10095;</span>
                        </div>
                        <div className="points">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Slideshow;
