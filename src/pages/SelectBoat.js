import React from 'react'

function SelectBoat() {
    return (
        <div>
            <section className='select-boat'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="line_box">
                                <div class="text_circle done">
                                    <div class="circle">

                                        <p>sarch Boat</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-search'></span></a>
                                </div>
                                <div class="text_circle">
                                    <div class="circle">

                                        <p>Select Your Boat</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-ship'></span></a>
                                </div>
                                <div class="text_circle">
                                    <div class="circle">

                                        <p>Customer Details</p>
                                    </div>
                                    <a href="#" class="tvar active"><span className='fa fa-user'></span></a>
                                </div>
                                <div class="text_circle">
                                    <div class="circle">
                                        <p>Booking Summary</p>
                                    </div>
                                    <a href="#" class="tvar active"><span className='fa fa-file-text-o'></span></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='boat-title'>
                                <h3>Choosing the Right Boat</h3>
                            </div>

                        </div>
                        <div className='col-lg-9 col-md-12 col-sm-12 col-xl-9'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-6 col-sm-12 col-xl-12'>
                                    <div className='select-boat-first-section'>
                                        <div className='select-inline-boat'>
                                            <div className='left-boat-img'>
                                                <img src="images/boat.png" alt="boat" />
                                            </div>
                                            <div className='right-boat-information'>
                                                <div className='right-boat'>
                                                    <h2>Row Boat</h2>
                                                    <div className='boat-ruppe'>₹ 500</div>
                                                </div>

                                                <div className='person'>
                                                    <div className='person-details'>
                                                        <div className='person-icon'>
                                                            <i class="fa fa-users" aria-hidden="true"></i>
                                                        </div>
                                                        <p>6 Person / Boat</p>
                                                    </div>
                                                    <div className='person-details'>
                                                        <div className='person-icon'>
                                                            <i class="fa fa-ship" aria-hidden="true"></i>
                                                        </div>
                                                        <p>Suitable for all age group</p>
                                                    </div>
                                                </div>
                                                <div className='chk-boat'>
                                                    <ul>
                                                        <li>1 Hour of Boating Activity</li>
                                                        <li>Qualified instructor for You</li>
                                                        <li>Safety Equipment also included</li>
                                                    </ul>
                                                    <button type='button' className='chk-boat-btn'>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-6 col-sm-12 col-xl-12'>
                                    <div className='select-boat-first-section'>
                                        <div className='select-inline-boat'>
                                            <div className='left-boat-img'>
                                                <img src="images/boat-1.png" alt="boat" />
                                            </div>
                                            <div className='right-boat-information'>
                                                <div className='right-boat'>
                                                    <h2>Row Boat</h2>
                                                    <div className='boat-ruppe'>₹ 500</div>
                                                </div>

                                                <div className='person'>
                                                    <div className='person-details'>
                                                        <div className='person-icon'>
                                                            <i class="fa fa-users" aria-hidden="true"></i>
                                                        </div>
                                                        <p>6 Person / Boat</p>
                                                    </div>
                                                    <div className='person-details'>
                                                        <div className='person-icon'>
                                                            <i class="fa fa-ship" aria-hidden="true"></i>
                                                        </div>
                                                        <p>Suitable for all age group</p>
                                                    </div>
                                                </div>
                                                <div className='chk-boat'>
                                                    <ul>
                                                        <li>1 Hour of Boating Activity</li>
                                                        <li>Qualified instructor for You</li>
                                                        <li>Safety Equipment also included</li>
                                                    </ul>
                                                    <button type='button' className='chk-boat-btn'>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xl-3'>
                            <div className='lake-details'>
                                <h3>Lake Details</h3>
                                <ul>
                                    <li><p>constructed by</p>Venna Lake is one of the tourist attractions of Mahabaleshwar in Maharashtra state in India. The lake was constructed by Shri Appasaheb Maharaj, who was Raja (King) of Satara in 1842. The lake is surrounded by trees. Tourists can enjoy a boat ride over the lake or a horse ride.</li>
                                    <li><p>Location</p>Mahabhaleswar</li>
                                    <li><p>Max. length</p>4 km (2.5 mi)</li>
                                    <li><p>Max. width</p>1.5 km (0.93 mi)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="main-title-black text12">
                                <h1><span>Download</span> to your device</h1>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='select-device'>
                                <div className='row' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-4 col-md-3 col-xl-4'>
                                        <p>Scan Me</p>
                                        <img src="images/qr-code.png" alt="qr-code" className='mb-4' />
                                    </div>
                                    <div className='col-lg-8 col-md-9 col-xl-8'>
                                        <div className='device-btn-select'>
                                            <button type='button' className='device-blue'><img src="images/dwn-white.png" alt="Download" />Download Now</button>
                                            <button type='button' className='device-green'><img src="images/apple-white.png" alt="Download" />Download Now</button>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                                        <ul>
                                            <li>Download our app to keep to up to date with the lates news just click the on the provide above link and enjoy your Travel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='select-device-img-lap'>
                                <img src="images/device-select.png" alt="device" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SelectBoat