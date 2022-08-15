import React from "react";
import styles from "./LeaderboardChart.module.css";

const LeaderboardChart = () => {
  return (
    <>
      <h3 className="text-center mb-3">LEADERBOARD CHART-1</h3>
      <table className='table table-striped table-bordered text-center'>
        <thead className="table-warning">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Likeability</th>
            <th scope="col">Charm</th>
            <th scope="col">Confidence</th>
            <th scope="col">Energy</th>
            <th scope="col">Fluency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-center mt-5 mb-3">LEADERBOARD CHART-2</h3>
      <table className={`${styles.table} table table-striped table-bordered text-center`}>
        <thead className="table-warning">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Content_Score</th>
            <th scope="col">Interaction_Score</th>
            <th scope="col">Interaction_Percentile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5 container">
        <p align='justify' className="mb-4">Best Regards,</p>
        <p align='justify'>Team <span className="fw-bold">Talent <span className="bg-warning p-2">Sumo</span></span></p>
      </div>
    </>
  );
};

export default LeaderboardChart;
