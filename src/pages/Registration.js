import React from 'react'

function Registration() {
    return (
        <div>
            <section className='registration'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-5 col-md-9 col-sm-12 col-xl-5'>
                            <div className='registration-box'>
                                <div className='reg-form'>

                                    <div class="company-logo">
                                        <div class="avatar-upload mb-3">
                                            <div class="avatar-edit">
                                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                <label for="imageUpload"></label>
                                            </div>
                                            <div class="avatar-preview">
                                                <div id="imagePreview" style={{ backgroundImage: 'url(../images/file-upload.png)' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='customer-name'>Mr. Satish Shah</div>
                                        <p>9234567890</p>
                                    </div>

                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputName">first Name</label>
                                                <input type="text" name="name" class="form-control" id="inputName" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputName">last name</label>
                                                <input type="text" name="name" class="form-control" id="inputName" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputName">Enter Mobile No.</label>
                                                <input type="text" name="name" class="form-control" id="inputName" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <div className='btn-sec'>
                                                    <button type='button' className='submit-btn'>Save</button>

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

export default Registration