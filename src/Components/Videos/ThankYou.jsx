import React from 'react';
import styles from './ThankYou.module.css';

import thankyou from "../../assets/Images/thankyou.svg"

const ThankYou = () => {
    return (
        <>
            <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={thankyou} alt="ThankYou" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Thank you!</h3>
                            <p align="justify">
                                <span className='text-dark'>"Cognizant"</span> will now need some time to review all the video interviews submitted by candidates.
                                Should Company wish to progress you through the interview process, they will be in contact within
                                the next few days.
                            </p>
                            <p className='mt-4 text-dark'>Thank you..</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;