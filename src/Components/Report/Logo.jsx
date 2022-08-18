import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import VideoModal from "./Modal/VideoModal";

const Logo = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <h1 className={`${styles.heading} mx-auto`}><span className="text-dark">Interaction Title</span> FEEDBACK REPORT</h1>
      <div className={`${styles.header} d-flex justify-content-between`}>
        <div className="my-5">
          <h4>Interaction : <span className="text-secondary">Product Mgmt V1.0</span> </h4>
          <h4>Date : <span className="text-secondary">{date}</span></h4>
          <hr />
          <h4>CANDIDATE NAME : <span className="text-secondary">Abc</span></h4>
          <Link to="/response">
            <h4 data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-primary text-decoration-underline" style={{ cursor: "pointer" }}>CANDIDATE RESPONSE</h4>
          </Link>
        </div>
      </div>
      <VideoModal />
    </>
  );
};

export default Logo;
