
// import './About.css'
import aboutImage1 from './img/about-1.jpg'
import aboutImage2 from './img/about-2.jpg'

function About() {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-img">
                            <div className="about-img-1">
                                <img src={aboutImage1} alt="Image"/>
                            </div>
                            <div className="about-img-2">
                                <img src={aboutImage2} alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-header">
                            <h2>Learn About Us</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                The spark Foundation is a not-for-profit organization registered in India and Singapore and oprating globally.
                            </p>
                            <p>
                                We inspire students to innovate and help them integrate to build a better humankind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;