import React from "react";
import styles from "./Logo.module.css";

import leaderboard from "../../assets/Images/leaderboard.png";

const Logo = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <div className={`${styles.row} row my-5`}>
        <h1 className="text-center my-3" style={{ color: "#f3c3a3" }}>LEADERBOARD REPORT</h1>
        <div className="col-md-6 m-auto">
          <div className="my-5">
            <h4>Interaction : <span className="text-white">Product Mgmt V1.0</span> </h4>
            <h4>Date : <span className="text-white">{date}</span></h4>
            <hr />
            <h4>CANDIDATE NAME : <span className="text-white">Abc</span></h4>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center m-auto">
          <img className="img-fluid" src={leaderboard} alt="report" width={300} />
        </div>
      </div>
    </>
  );
};

export default Logo;