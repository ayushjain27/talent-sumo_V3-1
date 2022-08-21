import React, { useState } from 'react';

const Value = () => {
  const [noOfRows, setNoOfRows] = useState(1);

  const style = {
    height: "150px",
    width: "100%",
    overflow: "auto",
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Skills:
                <span className="badge badge bg-secondary mx-2">Skill Name.</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div style={style}>
                {[...Array(noOfRows)].map(() => {
                  return (
                    <input type="text" className="form-control mb-3" placeholder='Add your skills' />
                  );
                })}
                <hr />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-success button me-2"
                  onClick={() => setNoOfRows(noOfRows + 1)}
                >
                  Add
                </button>
                <button
                  disabled={noOfRows <= 1}
                  type="submit"
                  className="btn btn-danger button"
                  onClick={() => setNoOfRows(noOfRows - 1)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
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
      </div>
    </>
  )
}

export default Value
