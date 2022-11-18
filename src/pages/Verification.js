import React from 'react'
import { PinInput } from 'react-input-pin-code'
function Verification() {
    const [values, setValues] = React.useState(['', '', '', '', '', '']);
    return (
        <div>
            <section className='verification'>
                <div className='container-fluid'>
                    <div className='row content-center'>
                        <div className='col-lg-5 col-md-8 col-sm-12 col-xl-5'>
                            <div className='verification-box'>
                                <div className='verify-title'>
                                    <h2>Book Your Boat <span>NOW!</span> </h2>
                                </div>
                                <div className='verify-body'>
                                    <h1>Please Entern <span style={{ fontSize: '22px' }}>Verification</span> Code</h1>
                                    <p>An OTP has been sent to Given Number<br />
                                        please enter below</p>

                                        <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <div className='pin'>
                                                <PinInput className="form-control" placeholder=''
                                                    values={values}
                                                    onChange={(value, index, values) => setValues(values)}
                                                />
                                                </div>
                                                
                                            </div>
                                            </div>
                                            </form>

                                    <span>Don’t get Code?<a href='#'> Cick to resend</a></span>
                                    <div className='vrify-btn-sec'>
                                        <button type='button' className='verify-btn'>Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-1 col-xl-1'></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Verification