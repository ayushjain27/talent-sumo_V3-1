import React, { useEffect, useState } from "react";
import styles from "./Interaction.module.css";
import QuesAns from '../Modal/QuesAns'
import Details from "./Details";

import axios from "axios";

import { Link } from 'react-router-dom'

const Interaction = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('response.json')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
  });

  return (
    <>
      <h3 className="text-center mt-5 mb-4">INTERACTION</h3>

      <div className="container">
        <div className="d-grid col-lg-7 mx-auto">
          <div className={`${styles.card} card`}>
            <div className="card-body">
              <form>
                <div className="row">
                  <label htmlFor="search" className="col-sm-2 col-form-label">Search :</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <table className="table table-bordered mt-5 text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">Test ID</th>
              <th scope="col">Job/Course Title</th>
              <th scope="col">Track</th>
              <th scope="col">Candidate Form</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal4" style={{ cursor: "pointer" }}>{item.id}</td>
                <td>{item.job_title}</td>
                <td>{item.track}</td>
                <td>
                  <Link to="/form" target="_blank">
                    Link
                  </Link></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <QuesAns />
      <Details />
    </>
  );
};

export default Interaction;
