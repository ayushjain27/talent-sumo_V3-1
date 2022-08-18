import React, { useEffect, useState } from 'react';
import styles from './Image.module.css';
import { useNavigate } from 'react-router-dom';

const Image = () => {

    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <>
            <div className={`${styles.container} container my-5`}>
                <div className="row">
                    <div className='col-md-4 bg-dark '>
                        <h3 className='text-white text-center m-auto'>Preview</h3>
                        <div className={`${styles.first} d-flex justify-content-center mx-auto`}>
                            {imageUrl && selectedImage && (
                                <div className={`${styles.box} my-5`}>
                                    <img
                                        className={`${styles.images} w-100 h-100`}
                                        src={imageUrl}
                                        alt={selectedImage.name}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h4>Question ?</h4>
                            <hr />
                            <input accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])} className="form-control" type="file" id="select-image" />
                            <div className="d-flex gap-2 my-3 float-end">
                                <button className="btn btn-outline-secondary" htmlFor="select-image">
                                    Upload
                                </button>
                                <button onClick={() => navigate("/text")} className="btn btn-dark float-end">Save and Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image;