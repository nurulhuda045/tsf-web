
import internImage from './img/intern.png'

function Feature() {
    return (
        <div id="program" class="feature">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-md-6">
                        <div class="feature-img">
                            <img src={internImage} alt="Image"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="section-header">
                            <h2>Graduate Rotational Internship Program</h2>
                        </div>
                        <p>
                            The Graduate Rotation Internship Program is an unique affer for students and recent graduates to experience and join TSF. This program aims to enable students to be professionally capable, and entrepreneurial. Apart from skill specific tasks, we encourage interns to build a credible professional profile.
                        </p>
                        <div class="row benefits">
                            <div class="col-6">
                                <div class="benefits-text">
                                    <h2 >Completion Certificate</h2>
                                    <p>After successfull Completion</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="benefits-text">
                                    <h2>Recomendation Letter</h2>
                                    <p>Top performing Interns</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="benefits-text">
                                    <h2>Workshops/Guidance</h2>
                                    <p>For personality insight</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="benefits-text">
                                    <h2>Hiring Opportunities</h2>
                                    <p>Best Candidate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature