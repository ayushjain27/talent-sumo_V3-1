import React from 'react';

const TextModal = () => {
    return (
        <>
            <div className="modal fade modal-lg" id="textModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Response Image</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-light">
                            <div className='card shadow border-0'>
                                <div className="card-body">
                                    <h6 align="justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sunt id exercitationem. Expedita quae alias ullam
                                        unde accusantium dignissimos facilis enim quidem quia, ipsa repellendus incidunt, fuga quod qui quisquam. Quam provident,
                                        totam exercitationem vel qui rerum minus vero eos quia officiis. Debitis nobis saepe rerum aut, quo suscipit eligendi?
                                    </h6>
                                </div>
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

export default TextModal;