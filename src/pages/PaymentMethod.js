import React from 'react'

function PaymentMethod() {
    return (
        <div>
            <section className='pay-method'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                            <div className='pay-title-top'>Choose Payment method</div>
                            <div className='pay-method-box'>
                                <div className='chose-pay'>
                                    <div className='pay-chk'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" checked />
                                            <label class="form-check-label1" for="flexRadioDefault1">
                                                Paytm <img src="images/upi-img.png" alt="upi" />
                                            </label>
                                            <p>887798767888@paytm</p>
                                        </div>
                                    </div>
                                    <div className='right-side-pay'>
                                        <img src="images/paytm.png" alt="paytm" />
                                    </div>
                                </div>

                                <div className='chose-pay'>
                                    <div className='pay-chk'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" />
                                            <label class="form-check-label1" for="flexRadioDefault1">
                                                Axis Bank<img src="images/upi-img.png" alt="upi" />
                                            </label>
                                            <p>887798767888@Axis</p>
                                        </div>
                                    </div>
                                    <div className='right-side-pay'>
                                        <img src="images/axis-bank.png" alt="axis-bank" />
                                    </div>
                                </div>

                                <div className='chose-pay'>
                                    <div className='pay-chk'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" />
                                            <label class="form-check-label1" for="flexRadioDefault1">
                                                Kotak mahindra bank<img src="images/upi-img.png" alt="upi" />
                                            </label>
                                            <p>887798767888@kotak</p>
                                        </div>
                                    </div>
                                    <div className='right-side-pay'>
                                        <img src="images/kotak-bank.png" alt="kotak-bank" />
                                    </div>
                                </div>

                                <div className='pay-option'>
                                    <h4>New Payment Option</h4>
                                    <div className='option-box'>
                                        <div className='left-pay'>Debit & Credit Cards</div>
                                        <div className='right-pay'><i class="fa fa-credit-card" aria-hidden="true"></i></div>
                                    </div>

                                    <div className='option-box'>
                                        <div className='left-pay'>Net Banking</div>
                                        <div className='right-pay'><i class="fa fa-home" aria-hidden="true"></i></div>
                                    </div>
                                </div>

                                <div className='pay-btn'>
                                    <button type='button' className='pay-primary'>Pay ₹ 520 </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PaymentMethod