import React from "react";
import Logo from "./Logo";
import ReportSnapshot from "./ReportSnapshot";
import TopCandidates from "./TopCandidates";
import LeaderboardChart from "./LeaderboardChart";
import Rating from "./Rating";
import Footer from "../LeaderboardReport/Footer";

const LeaderboardReport = () => {
  return (
    <>
      <div className="container my-5" style={{ backgroundColor: "#f4e9e2" }}>
        <Logo />
        <ReportSnapshot />
        <hr />
        <TopCandidates />
        <hr />
        <LeaderboardChart />
        <hr />
        <Rating />
        <Footer />
      </div>
    </>
  );
};

export default LeaderboardReport;
