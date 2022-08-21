import React, { useState } from "react";

const Quesans = () => {
  const [noOfRows, setNoOfRows] = useState(1);
  const [text, setText] = useState("Select...");
  const [texts, setTexts] = useState("Select...");
  const [display, setDisplay] = useState({ display: "none" });
  const [rated, setRated] = useState({ display: "none" });

  const handleOnChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "MCQ") {
      setDisplay({ display: "table-cell" });
    } else {
      setDisplay({ display: "none" });
    }
  };

  const handleOnChanges = (event) => {
    setTexts(event.target.value);
    if (event.target.value === "Yes") {
      setRated({ display: "table-cell" });
    } else {
      setRated({ display: "none" });
    }
  };

  const style = {
    height: "200px",
    width: "100%",
    overflow: "auto",
  };

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
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Total Questions:{" "}
                <span className="badge badge bg-secondary">No.</span>
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
                <table className="table">
                  <thead>
                    <tr className="table-secondary">
                      <th className="text-center" scope="col">
                        Question:
                      </th>
                      <th className="text-center" scope="col">
                        Answer Format:
                      </th>
                      <th style={display} className="text-center" scope="col">
                        Option 1
                      </th>
                      <th style={display} className="text-center" scope="col">
                        Option 2
                      </th>
                      <th style={display} className="text-center" scope="col">
                        Option 3
                      </th>
                      <th style={display} className="text-center" scope="col">
                        Option 4
                      </th>
                      <th style={display} className="text-center" scope="col">
                        Right Option
                      </th>
                      <th className="text-center" scope="col">
                        Ideal Answer:
                      </th>
                      <th className="text-center" scope="col">
                        Rated?
                      </th>
                      <th style={rated} className="text-center" scope="col">
                        ContentRated?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(noOfRows)].map((index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <textarea
                              className="form-control"
                              id="question"
                              rows="1"
                            ></textarea>
                          </td>
                          <td>
                            <select
                              onChange={handleOnChange}
                              value={text}
                              className="form-select"
                              id="answer"
                              aria-label="Default select example"
                            >
                              <option>Select...</option>
                              <option>Audio</option>
                              <option>Video</option>
                              <option>MCQ</option>
                              <option>Image</option>
                              <option>Text</option>
                              <option>Resume Link</option>
                            </select>
                          </td>
                          <td style={display}>
                            <textarea
                              className="form-control"
                              id="option1"
                              rows="1"
                            ></textarea>
                          </td>
                          <td style={display}>
                            <textarea
                              className="form-control"
                              id="option2"
                              rows="1"
                            ></textarea>
                          </td>
                          <td style={display}>
                            <textarea
                              className="form-control"
                              id="option3"
                              rows="1"
                            ></textarea>
                          </td>
                          <td style={display}>
                            <textarea
                              className="form-control"
                              id="option4"
                              rows="1"
                            ></textarea>
                          </td>
                          <td style={display}>
                            <select
                              className="form-select"
                              id="rightAnswer"
                            >
                              <option value="Select...">Select...</option>
                              <option value="Option 1">Option 1</option>
                              <option value="Option 2">Option 2</option>
                              <option value="Option 3">Option 3</option>
                              <option value="Option 4">Option 4</option>
                            </select>
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              id="idealAnswer"
                              rows="1"
                            ></textarea>
                          </td>
                          <td>
                            <select
                              onChange={handleOnChanges}
                              value={texts}
                              className="form-select"
                              id="rated"
                            >
                              <option selected>Select...</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <select
                              style={rated}
                              className="form-select"
                              id="contentRated"
                            >
                              <option selected value="Select...">
                                Select...
                              </option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <hr />
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
  );
};

export default Quesans;
