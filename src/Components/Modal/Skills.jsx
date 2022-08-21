import React from "react";

const Track = () => {
  const style = {
    overflow: 'auto',
    height: '150px'
  }
  return (
    <>
      <div
        className="modal fade modal-lg"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Skills
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={style}>
              <div className="container">
                <div className="d-flex justify-content-center gap-2 flex-wrap" style={{ cursor: "pointer" }}>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                  <span className="badge bg-dark">Reliance JIO - sales</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-dark mx-1">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Track;
