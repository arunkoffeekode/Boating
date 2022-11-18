import React from 'react'

function CustomerDetails() {
    return (
        <div>
            <section className='Customer-Details'>
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
                                <div class="text_circle">
                                    <div class="circle">

                                        <p>Customer Details</p>
                                    </div>
                                    <a href="#" class="tvar"><span className='fa fa-user'></span></a>
                                </div>
                                <div class="text_circle ">
                                    <div class="circle">
                                        <p>Booking Summary</p>
                                    </div>
                                    <a href="#" class="tvar active"><span className='fa fa-file-text-o'></span></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='customer-info'>
                                <h3>Please Enter your Details Below</h3>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-12 col-sm-12 col-xl-4 order-3 order-lg-1'>
                                        <div className='about-mahabaleshwar'>
                                            <img src="images/about-mahabaleshwar.png" alt="about-mahabaleshwar" className='mb-4' />
                                            <h2>Information</h2>
                                            <p>Venna lake is one of the most famous tourist attractions in Mahabaleshwar. The lake's water is serene, you can also go boating here, and there are also possible activities like horse riding. The best part being it is less than 2 kms from the main market, thus making it easily accessible.</p>
                                            <p>There are also ample places for parking tourist vehicles and plenty of food stalls around the lake area. These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream.  These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream.  These stalls serve everything from pav bhaji to hot corn tikkis and even the famous strawberry with cream. </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5 order-1 order-lg-1'>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                                                <div class="main-title-black text12">
                                                    <h1>Book Your Boat <span>NOW!</span> </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-section'>
                                            <div class="form-row">
                                                <div class="form-group col-md-6 col-lg-12">
                                                    <label for="inputName">Name</label>
                                                    <input type="text" name="name" class="form-control" id="inputName" />
                                                </div>

                                                <div class="form-group col-md-6 col-lg-12">
                                                    <label for="inputEmail">Last Name</label>
                                                    <input type="text" name="name" class="form-control" id="inputEmail" />
                                                </div>

                                                <div class="form-group col-md-12">
                                                    <label for="inputEmail">Eneter Mobile No.</label>
                                                    <input type="text" name="name" class="form-control" id="Mobile" />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail">Date</label>
                                                    <input type="date" name="name" class="form-control" id="Date" />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail">Time</label>
                                                    <input type="text" name="name" class="form-control" id="Date" />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail">No. Of Person</label>
                                                    <select name="services" id="services" class="form-control">
                                                        <option selected>People</option>
                                                        <option value="Treating">People</option>
                                                        <option value="Recycling">People</option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail">Select Boat</label>
                                                    <select name="services" id="services" class="form-control">
                                                        <option selected>1</option>
                                                        <option value="Treating">2</option>
                                                        <option value="Recycling">3</option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-md-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" style={{ height: '15px' }} />
                                                        <label class="form-check-label" for="flexCheckIndeterminate">
                                                            i agree with all terms and conditions
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12 col-xl-3 order-4 order-lg-1'>
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

                                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12 order-2 order-lg-1'>
                                        <div className='confirm-btn'>
                                            <button type='button' className='btn-green-summery'>Back</button>
                                            <button type='button' className='btn-summery'>Book Now</button>
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

export default CustomerDetails