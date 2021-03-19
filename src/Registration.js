import { useState } from "react";

function Registeration() {
    const url = "https://snapchatclone-3505b.firebaseio.com/users.json";

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email,
            name,
            country,
            phone
        }

        setLoading(true)

        fetch(url, { method: 'POST', body: JSON.stringify(data) })
        .then((res) => res.json())
        .then(() => {
            reset()
            alert("Regitered successfully")
        })
        .catch(() => {
            alert("Oops something went wrong!")
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const reset = () => {
        setEmail("")
        setName("")
        setCountry("")
        setPhone("")
    }
    return (
        <>
        <div id="register" class="service">
            <div class="container">
                <div class="section-header">
                    <h2>Register Here</h2>
                </div>
                <div class="row">
                    <div class="col-md-7">
                        <div class="registrationForm">
                            <div id="success"></div>
                            <form onSubmit={handleSubmit}>
                                <div class="control-group">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control"  placeholder="Your Email" required />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="name" placeholder="Your Full Name" required />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" class="form-control" id="country" placeholder="Your Country" required  />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="form-control" id="phone" placeholder="Your Contact Number" required />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn" type="submit" id="sendMessageButton" disabled={loading}>
                                        {
                                            loading ?
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            :
                                            <span>Submit</span>
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div id="contact" class="contact">
            <div class="container">
                <div class="section-header">
                    <h2>Get In Touch</h2>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Our Head Office</h3>
                                <p>THE HANGAR, NUS ENTERPRISE
                                    21 HENG MUI KENG TERRACE, SINGAPORE, 119613</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Call for Help</h3>
                                <p>+012 345 xxxx</p>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Email for Information</h3>
                                <p>info@thesparksfoundation.sg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="col-lg-9 footer-newsletter">
                            <h2>The Spark Foundation</h2>
                            <p>
                                We connect students of all financial backgrounds with experts. Knowledge sharing enables equal opportunity for all.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>Our Head Office</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>21 HENG MUI KENG TERRACE, SINGAPORE, 119613</p>
                                    <p><i class="fa fa-phone-alt"></i>+012 345 xxxx</p>
                                    <p><i class="fa fa-envelope"></i>info@thesparksfoundation.sg</p>
                                    <div class="footer-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-12">
                        <p>&copy; <a href="#">The Spark Foundation</a>, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Registeration;