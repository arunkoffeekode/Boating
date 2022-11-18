import React from 'react'
import "./Navbar.css"
function Navber() {
    return (
        <div>
            <div id="navbar_top" className="header-item-center">
                <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation"> <span></span> <span></span> <span></span> </button>
                        <a className="navbar-brand text-brand" href="#"><img src="images/logo.png" alt="" className='desk' /><img src="images/favicon.png" alt="" className='mob' /></a>
                        <div className="navbar-collapse collapse" id="navbarDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item"> <a className="nav-link" href="#" title="Near By"> Near By </a></li>
                                <li className="nav-item"> <a className="nav-link" href="#" title="Help"> Help </a>
                                </li>
                                <li className="nav-item"> <a className="nav-link" href="#" title="SCHEDULER"> SCHEDULER </a></li>
                            </ul>
                        </div>
                        <div className="register">
                            <div className="desk12">
                                <ul>
                                    <li className="top-cart">
                                        <button type='button' className='book-now'>Book Now</button>
                                    </li>
                                    <li className="top-cart">
                                        <a href="#">
                                            <div className="circle">
                                                <img src="images/client.png" alt="" />
                                            </div>
                                        </a>
                                        <div className="account-dropdown">
                                            <div className="avtar-section">
                                                <p>Hello,<br /><span>Fredi Allan</span></p>
                                                <div className="circle">
                                                    <img src="images/client.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="login-details">
                                                <ul>
                                                    <li><a href="#"> <img src="images/user.png" alt=""
                                                        className="lu" />Account Settings</a>
                                                    </li>
                                                    <li><a href="#"><img src="images/newspaper.png" alt=""
                                                        className="lu" />Billing &
                                                        Domains</a></li>
                                                    <li><a href="#"><img src="images/CloudArrowUp.png" alt=""
                                                        className="lu" />Recent Updates
                                                    </a></li>
                                                    <li><a href="#"><img src="images/ShareNetwork.png" alt=""
                                                        className="lu" />Share
                                                        Account</a></li>
                                                    <li>
                                                        <div className="logout">
                                                            <a href="#"><img src="images/logout.png" alt="" className="lu" />Logout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navber