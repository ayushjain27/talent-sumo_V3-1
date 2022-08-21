import React, { useState, useEffect } from "react";
import styles from "./Profilepic.module.css";

const Profilepic = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  return (
    <>
      <style jsx="true">
        {`
            .button {
                  border-radius: 0;
            }
        `}
      </style>
      <div
        className="modal fade modal-lg"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Profile-Image
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
              <input accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])} className="form-control" type="file" id="select-image" />
              <div className="d-flex justify-content-center mx-auto">
                <button
                  className="btn btn-dark mt-3 button"
                  htmlFor="select-image"
                >
                  Upload
                </button>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-dark">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilepic;
