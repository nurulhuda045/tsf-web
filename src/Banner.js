
import carousel2 from './img/carousel-2.jpg'

function Banner() {
    return(
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel2} alt="Image"/>
                        </div>
                        <div className="carousel-text">
                            <h1>Your Success Our Achievement</h1>
                            <div className="carousel-btn">
                                <a className="btn" href="#register"><i className="fa fa-link"></i>Register Now</a>
                                <a className="btn" href="#about">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Banner;