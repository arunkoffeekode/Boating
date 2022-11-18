import React from 'react'

function ConfirmBooking() {
    return (
        <div>
            <section className='ConfirmBooking'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5'></div>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                            <div class="main-title-black text12">
                                <h1><span>Booking</span> Confirmed!</h1>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='ConfirmBooking-box'>
                                <div className='row g-0'>
                                    <div className='col-lg-5 col-sm-12 col-xl-5 col-md-12 bor-right'>
                                        <div className='bar-box'>
                                            <div className='confirm-barcode'>
                                                <img src="images/qr-code.png" alt="qr-code" className='mb-3' />
                                                <p>Booking ID</p>
                                                <h2>VLMH2349KJB</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='col-lg-1'></div> */}
                                    <div className='col-lg-7 col-md-12 col-xl-7 col-sm-12'>
                                        <div className='book-details'>
                                            <div class="calculate">
                                                <div className='Pedle-Boat'>
                                                    <h2>Pedle Boat</h2>
                                                    <ul>
                                                        <li>Professional Guide: Included</li>
                                                        <li>Safety Equipment also included</li>
                                                    </ul>
                                                </div>
                                                <div className='Pedle-Boat-img'>
                                                    <img src="images/padle-boat.png" alt="Pedle Boat" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-hr'></div>
                                        <div className='book-details'>
                                            <div class="calculate">
                                                <div class="first-caculate">
                                                    <h5>Timing:</h5>
                                                </div>
                                                <div class="second-caculate">
                                                    <h6>1:00 pm To 2:00 pm</h6>
                                                </div>
                                            </div>
                                            <div class="calculate">
                                                <div class="first-caculate">
                                                    <h5>Date:</h5>
                                                </div>
                                                <div class="second-caculate">
                                                    <h6>20/11/2022</h6>
                                                </div>
                                            </div>
                                            <div class="calculate">
                                                <div class="first-caculate">
                                                    <h5>Duration:</h5>
                                                </div>
                                                <div class="second-caculate">
                                                    <h6>1 Hour</h6>
                                                </div>
                                            </div>
                                            <div class="calculate">
                                                <div class="first-caculate">
                                                    <h5>No.Of Person:</h5>
                                                </div>
                                                <div class="second-caculate">
                                                    <h6>06 People</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='confirm-btn'>
                                <button type='button' className='btn-summery'>Booking Summary</button>
                                <button type='button' className='btn-green-summery'>Download Ticket</button>
                                <button type='button' className='btn-summery'>Share Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ConfirmBooking