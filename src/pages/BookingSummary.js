import React from 'react'

function BookingSummary() {
    return (
        <div>
            <section className='booking-summary'>
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
                                <div class="text_circle done">
                                    <div class="circle">

                                        <p>Select Your Boat</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-ship'></span></a>
                                </div>
                                <div class="text_circle done">
                                    <div class="circle">

                                        <p>Customer Details</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-user'></span></a>
                                </div>
                                <div class="text_circle done">
                                    <div class="circle">
                                        <p>Booking Summary</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-file-text-o'></span></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='customer-info'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-12 col-sm-12 col-xl-4'>
                                        <div className='client-boat-img'>
                                            <img src="images/client-boat.png" alt="client-boat" />
                                            <div className='row-boat'>
                                                <h3>Row Boat</h3>
                                                <p><i class="fa fa-users" aria-hidden="true"></i> 6 Person / Boat</p>
                                                <p><i class="fa fa-certificate" aria-hidden="true"></i> 8:00am to 7:00pm</p>
                                            </div>
                                            <div className='row-boat-footer'>
                                                <div className='duration'>Duration: 1 Hour </div>
                                                <div className='ruppee'>₹ 500</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5'>
                                        <div className='client-details'>
                                            <div className='title-section'>
                                                <h4>Client Details</h4>
                                            </div>
                                            <div className='client-body'>
                                                <div className='client-info'>
                                                    <div className='left-client'>Name</div>
                                                    <div className='right-client'>Ritesh</div>
                                                </div>
                                                <div className='client-info'>
                                                    <div className='left-client'>Contact No.</div>
                                                    <div className='right-client'>9899845690</div>
                                                </div>
                                                <div className='client-info'>
                                                    <div className='left-client'>No People</div>
                                                    <div className='right-client'>5 People</div>
                                                </div>
                                                <div className='client-info'>
                                                    <div className='left-client'>Timing</div>
                                                    <div className='right-client'>1:00 pm To 2:00 pm</div>
                                                </div>
                                                <div className='client-info'>
                                                    <div className='left-client'>Date</div>
                                                    <div className='right-client'>20/11/2022</div>
                                                </div>
                                                <div className='client-info'>
                                                    <div className='left-client'>Duration</div>
                                                    <div className='right-client'>1 Hour</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='client-details'>
                                            <div className='title-section'>
                                                <h4>Booking Details</h4>
                                            </div>
                                            <div className='client-body'>
                                                <div className='client-info'>
                                                    <div className='left-client'>No. Boat</div>
                                                    <div className='right-client'>500</div>
                                                </div>
                                                <div className='client-info mb-1'>
                                                    <div className='left-client'>Taxes & Fees</div>
                                                </div>
                                                <div className='client-info mb-1'>
                                                    <p>conversion fees</p>
                                                    <span>₹ 15</span>
                                                </div>
                                                <div className='client-info mb-1'>
                                                    <p>Central goods and service Tax </p>
                                                    <span>₹ 2.50</span>
                                                </div>
                                                <div className='client-info mb-1'>
                                                    <p>State goods and service Tax  </p>
                                                    <span>₹ 2.50</span>
                                                </div>



                                            </div>
                                            <div className='client-footer'>
                                                <div className='clent-total'>Total</div>
                                                <div className='ruppe'>₹ 600.00</div>
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

                                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                                        <div className='confirm-btn mt-3'>
                                            <button type='button' className='btn-green-summery'>Back</button>
                                            <button type='button' className='btn-summery'>Proceed to Pay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookingSummary