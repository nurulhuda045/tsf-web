
// import './Remaining.css'
import icon1 from './img/icon-1.png'
import icon2 from './img/icon-2.png'
import icon3 from './img/icon-3.png'
import icon4 from './img/icon-4.png'


function Remaining() {
    return (
        <>
        <div class="service">
            <div class="container">
                <div class="section-header">
                    <h2>Guidance And Mentoring</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={icon1} alt="Icon"/>
                            <h3>Scheduled Calls</h3>
                            <p>
                                Regular contact with core team members via live online sessions.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={icon2} alt="Icon"/>
                            <h3>Mentor Support</h3>
                            <p>
                                Our mentors are there to guide and support you at any time.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={icon3} alt="Icon"/>
                            <h3>Discussion Forum</h3>
                            <p>
                                You will be asked to join The Spark Foundation group on Linkedin.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={icon4} alt="Icon"/>
                            <h3>On Demand Support</h3>
                            <p>
                                If you feel the need, you can mail us. We will guide you to the correct resources.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Remaining;