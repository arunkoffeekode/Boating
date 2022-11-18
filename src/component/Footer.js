import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xl-4">
                            <div className="first-footer">
                                <div className="logo-section">
                                    <img src="images/footer-logo.png" alt="logo" />
                                </div>
                                <p>Venna lake is one of the most famous tourist attractions in Mahabaleshwar. The lake's water is serene, you can also go boating here, and there are also possible activities like horse riding. The best part bein</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-12 col-xl-3">
                            <div className="footer-links-1">
                                <div className="footer-title">
                                    <h5>About Us</h5>
                                </div>
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#"> Help</a></li>
                                    <li><a href="#"> FAQ</a></li>
                                    <li><a href="#"> Terms & Condition</a></li>
                                    <li><a href="#"> Download App</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-12 col-xl-3">
                            <div className="footer-links-1">
                                <div className="footer-title">
                                    <h5>eXPLORE  mORE</h5>
                                </div>
                                <ul>
                                    <li><a href="#">explore more in mahabhaleswar </a></li>
                                    <li><a href="#"> Download to your device</a></li>
                                    <li><a href="#"> About you need to know</a></li>
                                    <li><a href="#"> Nearby PLaces / parking </a></li>
                                    <li><a href="#"> Feedback  </a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12 col-xl-2">
                            <div className="footer-address">
                                <a href="#" className="whatsApp"> <img src="images/download.png" alt="logo" /> Download Now</a>
                                <a href="#" className="whatsApp"> <img src="images/apple.png" alt="logo" /> Download Now</a>

                                <div className="socialfoot">
                                    <h5>Connect with us</h5>
                                    <ul>
                                        <li><a target="_blank" href="#"><i className="fa fa-facebook fb"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-twitter fb"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-instagram fb"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-linkedin fb"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-google fb"></i></a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="copy-right-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="left-copy">
                                <p>Copyright @ 2022 Koffeekodes IT Solutions.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer