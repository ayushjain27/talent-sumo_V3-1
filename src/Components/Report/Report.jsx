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
      <div className="container my-5">
        <div className="card border-warning">
          <div className="card-body">
            <Logo />
            <hr />
            <Introduction />
            <hr />
            <DomainRatings />
            <hr />
            <FeedbackSnapsot />
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
        </div>
      </div>
    </>
  );
};

export default Report;
