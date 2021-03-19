import React from 'react'


function TopBar() {
    return (
        <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="text">
                                <i className="far fa-clock"></i>
                                <h2>8:00 - 9:00</h2>
                                <p>Mon - Fri</p>
                            </div>
                            <div className="text">
                                <i className="fa fa-phone-alt"></i>
                                <h2>+123 456 xxxx</h2>
                                <p>For Information</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href="https://twitter.com/tsfsingapore" target="blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.facebook.com/thesparksfoundation.info" target="blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/13625083" target="blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/thesparksfoundation.info/" target="blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;