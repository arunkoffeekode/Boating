import React from 'react'

function Account() {

    const pass = () => {
        let passwordInput = document.getElementById("txtPassword"),
            toggle = document.getElementById("btnToggle"),
            icon = document.getElementById("eyeIcon");

        function togglePassword() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.add("fa-eye-slash");
                //toggle.innerHTML = 'hide';
            } else {
                passwordInput.type = "password";
                icon.classList.remove("fa-eye-slash");
                //toggle.innerHTML = 'show';
            }
        }

        function checkInput() {
        }
        toggle.addEventListener("click", togglePassword, false);
        passwordInput.addEventListener("keyup", checkInput, false);
    }

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
                                    <p>Please Enter Your User ID Or Mobile Number To Login</p>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <input type="text" name="name" class="form-control" id="inputName" placeholder='Full Name' />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="text" name="name" class="form-control" id="inputName" placeholder='Enter Mobile No.' />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <input type="password" id="txtPassword" className="form-control"
                                                    placeholder="Password" />
                                                <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                    <i id="eyeIcon" className="fa fa-eye"></i>
                                                </button>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="password" id="txtPassword" className="form-control"
                                                    placeholder="Confirm Password" />
                                                <button type="button" id="btnToggle" className="toggle" onClick={pass}>
                                                    <i id="eyeIcon" className="fa fa-eye"></i>
                                                </button>
                                            </div>

                                            <div class="form-group col-md-12">
                                                <div className='login-btn mt-1'>
                                                    <button type='button' className='btn-login'>
                                                        Sign Up
                                                    </button>
                                                </div>
                                                <div className='link-here'>Aready have An account? <a href='#'>Log In</a> </div>
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

export default Account