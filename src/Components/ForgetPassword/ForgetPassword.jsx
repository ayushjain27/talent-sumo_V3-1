import React from 'react';
import styles from './ForgetPassword.module.css';

import password from '../../assets/Images/password.png';

const ForgetPassword = () => {
    return (
        <>
            <div className="container">
                <div className="d-grid col-md-6 mt-5 mx-auto">
                    <div className="card border-dark">
                        <h3 className={`${styles.cardHeader} card-header bg-dark text-white text-center`}>Create New Password</h3>
                        <div className="card-body">
                            <img src={password} className={`${styles.img} d-flex justify-content-center mx-auto mt-3 img-fluid p-3`} alt="forget password" width={"150px"} />
                            <h5 className="text-center my-3">Your New Password Must Be Different <br />from Previously Used Password.</h5>
                            <form>
                                <div className="mb-3">
                                    <input type="password" className='form-control' id="password" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className='form-control' id="confirmPassword" placeholder="Confirm Password" />
                                </div>
                                <div className='d-flex justify-content-center mx-auto'>
                                    <button className='btn btn-dark'>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;