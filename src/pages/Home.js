import React from 'react'
import OwlCarousel from 'react-owl-carousel';

//Owl Carousel Settings
const options = {
    loop: true,
    dots: false,
    margin: 25,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 70,
    responsiveClass: true,
    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
        },
    },
};

function Home() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="images/slider.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/slider.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/slider.png" alt="Third slide" />
                    </div>
                </div>
            </div>

            {/* Book-now-form */}
            <section className='booking-form'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='form-book-section'>
                                <form>
                                    <div class="row gx-2">
                                        <div className='form-group col-md-12 col-lg-2 col-xl-2 col-sm-12' style={{display:'flex',alignItems:'center'}}>
                                            <div className='book-text'>Book Now</div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <select name="services" id="services" class="form-control">
                                                <option selected>Select Boat</option>
                                                <option value="Treating">Boat</option>
                                                <option value="Recycling">Boat</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <select name="services" id="services" class="form-control">
                                                <option selected>People</option>
                                                <option value="Treating">People</option>
                                                <option value="Recycling">People</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4 col-lg-2 col-xl-2 col-sm-12">
                                            <button type='button' className='booking-now'>
                                            Continue
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* explore-section */}
            <section className='explore'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="main-title-black">
                                <h1><span>explore</span> more in mahabhaleswar</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                            <div className='explore-details'>
                                <h2>Explore Veena Lake</h2>
                                <p>Venna lake is one of the most famous tourist attractions in Mahabaleshwar. The lake's water is serene, you can also go boating here, and there are also possible activities like horse riding. The best part being it is less than 2 kms from the main market, thus making it easily accessible.</p>
                                <p>There are also ample places for parking tourist vehicles and plenty of food stalls around the lake area. These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream.  These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream.  These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream. tikkis and even the famous strawberry with cream.  These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with creamtikkis and even the famous strawberry with cream.  These stalls serve everything from</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                            <div class="border-back-1"></div>
                            <div class="staking-info">
                                <img src="images/explore-1.png" alt="Explore Veena Lake" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                            <div class="border-back-2"></div>
                            <div class="staking-info-2">
                                <img src="images/explore-2.png" alt="Highlights" />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                            <div className='explore-details'>
                                <h2>Highlights</h2>
                                <ul>
                                    <li>Enjoy Mahabaleshwar's mesmerizing, human-made Vienna Lake with rowboats and pedal boats.</li>
                                    <li>Make the experience memorable by taking advantage of the tranquil lake and the refreshing breeze. </li>
                                    <li>Utilize the range of sports available in this tropical haven to make the most of your trip.</li>
                                    <li>Enjoy the comfort of your spacious room as you unwind and sip your preferred beverage.</li>
                                    <li>Take part in sports like horse driving or toy trains to explore the clear waters fully.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* device */}
            <section className='device'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="main-title-black">
                                <h1><span>Download</span> to your device</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                            <div className='bar-code-section'>
                                <div className='dr-device'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                            <img src="images/qr-code.png" alt="qr-code" className='mb-3' />
                                        </div>
                                        <div className='col-lg-8 col-md-7 col-sm-12 col-xl-8'>
                                            <div className='scan-details'>
                                                <h5>Scan Me</h5>
                                                <ul>
                                                    <li>Download our app to keep to up to date with the lates news just click the on the provide above link and enjoy your Travel</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-lg-1 col-md-1 col-xl-1 col-sm-12'></div>

                                    </div>
                                </div>
                                <div className='dwn-button'>
                                    <button type='button' className='dwn-app'><img src="images/dwn-white.png" alt="Download" />Download Now</button>
                                    <button type='button' className='dwn-app-blue'><img src="images/apple-white.png" alt="Download" />Download Now</button>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5'>
                            <div className='device-img'>
                                <img src="images/device.png" alt="device" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* about */}
            <section className='about'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="main-title-black">
                                <h1> <span>About</span> you need to know </h1>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-xl-8'>
                            <div className='about-blue' style={{ background: 'url(images/about-blue.png) no-repeat center top', backgroundSize: 'cover' }}>
                                <div className='about-info'>
                                    <h2>Know before you go to Vienna Lake Boating in Mahabaleshwar:</h2>
                                    <ul>
                                        <li>Any damage caused to the bike because of mishandling on the part of the rider is to be borne by the traveler.</li>
                                        <li>GST is applicable to the package cost.</li>
                                        <li>The traveler will be taking care of the International / Domestic airfare, visa fees, airport tax, or any kind of insurance cover</li>
                                        <li>Items of personal nature like drinks, laundry, telephone calls, tips, camera fees, etc. will not be provided in the package cost</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                            <div className='about-green' style={{ background: 'url(images/about-green.png) no-repeat center top', backgroundSize: 'cover' }}>
                                <h2>How to Reach Vienna Lake for Boating:</h2>
                                <p>From Mumbai: Approx  264 kilometers</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4'>
                            <div className='about-green' style={{ background: 'url(images/about-green-1.png) no-repeat center top', backgroundSize: 'cover' }}>
                                <h2>Note: </h2>
                                <p>Child Policy : Children under 5 years are complimentary. Children above 5 could be handled as adults.</p>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-xl-8'>
                            <div className='about-blue' style={{ background: 'url(images/about-blue-1.png) no-repeat center top', backgroundSize: 'cover' }}>
                                <div className='about-info'>
                                    <h2>Vienna Lake Boating<br /> Package gives:</h2>
                                    <ul>
                                        <li>Minimum 30 minutes to 1 hour of the pedal boat or rowboat as in step with the package deal selected.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* feedback-section */}
            <section className='feedback pt-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="main-title-black">
                                <h1><span>Feedback</span> | Venna Lake, Mahabaleshwar, Maharashtra</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={3} nav autoplay={true} {...options}>
                                <div class="item">
                                    <div className='feedback-box'>
                                        <div className='feedback-line'>
                                            <div className='feed-img'>
                                                <img src="images/feedback.png" alt="feedback" />
                                            </div>
                                            <div className='feed-customer'>
                                                <div className='img-name'>
                                                    <img src="images/customer.png" alt="customer" />
                                                    <div className='name'>
                                                        <h5>Kamal U.</h5>
                                                        <p>25 Feb 2022</p>
                                                    </div>
                                                </div>
                                                <div className='wishlist'>
                                                    <ul>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><div className='total-wishlist'>3.5</div></li>
                                                    </ul>
                                                </div>
                                                <div className='feed-text'>Lorem ipsum dolor sit amet consectetur.Lorem bibendum...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div className='feedback-box'>
                                        <div className='feedback-line'>
                                            <div className='feed-img'>
                                                <img src="images/feedback.png" alt="feedback" />
                                            </div>
                                            <div className='feed-customer'>
                                                <div className='img-name'>
                                                    <img src="images/customer.png" alt="customer" />
                                                    <div className='name'>
                                                        <h5>Kamal U.</h5>
                                                        <p>25 Feb 2022</p>
                                                    </div>
                                                </div>
                                                <div className='wishlist'>
                                                    <ul>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><div className='total-wishlist'>3.5</div></li>
                                                    </ul>
                                                </div>
                                                <div className='feed-text'>Lorem ipsum dolor sit amet consectetur.Lorem bibendum...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div className='feedback-box'>
                                        <div className='feedback-line'>
                                            <div className='feed-img'>
                                                <img src="images/feedback.png" alt="feedback" />
                                            </div>
                                            <div className='feed-customer'>
                                                <div className='img-name'>
                                                    <img src="images/customer.png" alt="customer" />
                                                    <div className='name'>
                                                        <h5>Kamal U.</h5>
                                                        <p>25 Feb 2022</p>
                                                    </div>
                                                </div>
                                                <div className='wishlist'>
                                                    <ul>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><div className='total-wishlist'>3.5</div></li>
                                                    </ul>
                                                </div>
                                                <div className='feed-text'>Lorem ipsum dolor sit amet consectetur.Lorem bibendum...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div className='feedback-box'>
                                        <div className='feedback-line'>
                                            <div className='feed-img'>
                                                <img src="images/feedback.png" alt="feedback" />
                                            </div>
                                            <div className='feed-customer'>
                                                <div className='img-name'>
                                                    <img src="images/customer.png" alt="customer" />
                                                    <div className='name'>
                                                        <h5>Kamal U.</h5>
                                                        <p>25 Feb 2022</p>
                                                    </div>
                                                </div>
                                                <div className='wishlist'>
                                                    <ul>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li className='active'><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                        <li><div className='total-wishlist'>3.5</div></li>
                                                    </ul>
                                                </div>
                                                <div className='feed-text'>Lorem ipsum dolor sit amet consectetur.Lorem bibendum...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home