import React, { useState } from "react";
import styles from "./Profile.module.css";
import Profilepic from "./Profilepic";
import { FaUser, FaPenSquare } from "react-icons/fa";

import { countries } from "../../assets/Countries/countries";

const Profile = () => {
  const [style, setStyle] = useState({ display: "none" });
  const mouseEnter = () => {
    setStyle({
      display: "block",
      width: "15%",
      height: "15%",
      position: "absolute",
      left: "60%",
      top: "25%",
      cursor: "pointer",
    });
  };
  const mouseLeave = () => {
    setStyle({
      display: 'none'
    })
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
      <div className="mt-5 container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <h5>Upload Profile Picture :</h5>
              </div>
              <div className="card-body d-flex justify-content-center">
                {/* <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Upload Profile Picture</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div> */}
                {/* <button  className='btn btn-dark button'>Upload</button> */}
                <FaUser
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="h-50 w-50 m-auto p-3 bg-light"
                />
                <FaPenSquare
                  style={style}
                  onMouseEnter={mouseEnter}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Personal Details :</h5>
                  <div className="text-end">
                    <button className="btn btn-secondary button">Edit</button>
                    <p className="text-danger">Click Edit to update details*</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="fName"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="emailAddress"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="contactNumber"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="Select Country">Select Country</option>
                        {countries.map((item) => (
                          <option>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mt-4">Social Links :</h5>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="linkedin"
                          placeholder="LinkedIn"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="facebook"
                          placeholder="Facebook"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="twitter"
                          placeholder="Twitter"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="instagram"
                          placeholder="Instagram"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-dark button">Submit Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Profilepic />
    </>
  );
};

export default Profile;
