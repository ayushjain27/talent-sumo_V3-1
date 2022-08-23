import React from "react";

import Logo from "./Logo";
import Introduction from "./Introduction";
import DomainRatings from "./DomainRatings";
import FeedbackSnapshot from "./FeedbackSnapshot";
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
        <hr />
        <FeedbackSnapshot />
        <hr />
        <InteractionScorecard />
        <hr />
        <DomainRatings />
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
