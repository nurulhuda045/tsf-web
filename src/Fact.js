
// import './Fact.css'
import icon4 from './img/icon-4.png'
import icon1 from './img/icon-1.png'
import icon8 from './img/icon-8.png'
import icon6 from './img/icon-6.png'

function Fact() {
    return (
        <div class="fact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src={icon4} alt="Icon"/>
                            <h2>Qualified Team</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src={icon1} alt="Icon"/>
                            <h2>Individual Approach</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src={icon8} alt="Icon"/>
                            <h2>100% Success</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src={icon6} alt="Icon"/>
                            <h2>100% Satisfaction</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fact