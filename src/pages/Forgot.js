import React from 'react'

function Forgot() {
    return (
        <div>
            <section className='login'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-5 col-md-9 col-sm-12 col-xl-5'>
                            <div className='login-form'>
                                <div className='login-logo'>
                                    <img src="images/form-logo.png" alt="logo" />
                                </div>
                                <div className='from-start'>
                                    <p>Forgot Password?</p>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <input type="text" name="name" class="form-control" id="inputName" placeholder='Enter Mobile Number' />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <div className='link-here'>Aready have An account? <a href='#'>Log In</a> </div>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <div className='login-btn mt-1'>
                                                    <button type='button' className='btn-login'>
                                                        Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forgot