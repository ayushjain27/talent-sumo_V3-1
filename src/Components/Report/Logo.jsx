import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

import report from "../../assets/Images/report.png"

const Logo = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <div className={`${styles.row} my-5 row`}>
        <h1 className="text-center my-3" style={{ color: "#f3c3a3" }}>
          Interaction Title FEEDBACK REPORT
        </h1>
        <div className="col-md-6 m-auto">
          <h4>Interaction : <span className="text-white">Product Mgmt V1.0</span> </h4>
          <h4>Date : <span className="text-white">{date}</span></h4>
          <hr />
          <h4>CANDIDATE NAME : <span className="text-white">Abc</span></h4>
          <Link to="/response">
            <h5 className="text-primary text-decoration-underline" style={{ cursor: "pointer" }}>CANDIDATE RESPONSE</h5>
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center m-auto">
          <img className="img-fluid" src={report} alt="report" width={300} />
        </div>


      </div>
    </>
  );
};

export default Logo;
