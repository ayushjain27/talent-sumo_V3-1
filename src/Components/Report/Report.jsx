import React from "react";
import Logo from "./Logo";
import Introduction from "./Introduction";
import DomainRatings from "./DomainRatings";
import FeedbackSnapsot from "./FeedbackSnapsot";
import InteractionScorecard from "./InteractionScorecard";
import RatingVariables from "./RatingVariables";
import GeneralVariables from "./GeneralVariables";
import ContentRatings from "./ContentRatings";
import InteractionTranscript from "./InteractionTranscript";
import Footer from "./Footer";


const Report = () => {
  return (
    <>
      <div className="container my-5" style={{ backgroundColor: "#f4e9e2" }}>
        <Logo />
        <Introduction />
        <div className="row my-5">
          <div className="col-md-6 m-auto">
            <DomainRatings />
          </div>
          <div className="col-md-6 m-auto">
            <FeedbackSnapsot />
          </div>
        </div>
        <hr />
        <InteractionScorecard />
        <hr />
        <RatingVariables />
        <hr />
        <GeneralVariables />
        <hr />
        <ContentRatings />
        <hr />
        <InteractionTranscript />
        <Footer />
      </div>
    </>
  );
};

export default Report;
