import React from "react";
import Logo from "./Logo";
import ReportSnapshot from "./ReportSnapshot";
import TopCandidates from "./TopCandidates";
import LeaderboardChart from "./LeaderboardChart";
import Rating from "./Rating";

const LeaderboardReport = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card border-warning">
          <div className="card-body">
            <Logo />
            <hr />
            <ReportSnapshot />
            <hr />
            <TopCandidates />
            <hr />
            <LeaderboardChart />
            <hr />
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardReport;
