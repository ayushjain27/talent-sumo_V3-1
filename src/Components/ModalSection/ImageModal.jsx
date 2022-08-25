import React from 'react';
import logo from '../../assets/Images/Certificate.svg';

const ImageModal = () => {
    return (
        <>
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Response Image</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center mx-auto'>
                                <img className='img-fluid' src={logo} width="300" alt="responseImage" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageModal