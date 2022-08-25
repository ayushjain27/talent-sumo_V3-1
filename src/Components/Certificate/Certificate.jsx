import React from 'react';
import styles from './Certificate.module.css';

import logo from '../../assets/Images/Certificate.svg';

const Certificate = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="d-grid col-10 mx-auto">
                    <div className="card border-dark">
                        <div className={`${styles.cardHeader} card-header bg-dark text-white text-center`}>
                            <h3>CERTIFICATE</h3>
                            <h5>OF INTERACTION TITLE</h5>
                        </div>
                        <div className="card-body text-center">
                            <img src={logo} className={`${styles.img} img-fluid rounded-circle d-flex mx-auto`} width="150px" alt="logo" />
                            <h5 className="card-title mt-3">This is awarded to</h5>
                            <h1 className="card-text">
                                John Doe
                            </h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequatur repudiandae vel error,
                                explicabo consectetur ipsa repellat cum tempora laboriosam ducimus laborum commodi ipsam consequuntur
                                nulla porro dignissimos minus architecto, deserunt rerum veniam aliquam. Culpa nisi, nostrum
                                dignissimos laudantium tempora, dolorem magni quisquam ea saepe impedit ut ratione, nemo blanditiis.
                            </p>
                            <div className='mt-5 d-flex justify-content-between mx-5'>
                                <p className={styles.para}>Track</p>
                                <p className={styles.para}>Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificate;