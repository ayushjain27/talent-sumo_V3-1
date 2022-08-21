import React from "react";

const Interaction = () => {
  return (
    <>
      <div className="container">
        <div className="card border-0">
          <div className="card-body" style={{ color: "#0b3c47" }}>
            <h3 className="card-title text-center">INTRODUCTION</h3>
            <p align='justify'>"Each interaction is analyzed via our HCI models (Human-Computer Interaction) to detect the content accuracy and the way the content is delivered.
              Our model tracks basic elements (detailed later) and converts them into proprietary indicators."
            </p>
            <p align='justify'>
              The AI algorithms rate each answer of the candidate to distribute them into four groups or cohorts, for each of the parameters we are tracking.
              <ol type="a">
                <li>
                  Cohort A: Top 25% of the responses.
                </li>
                <li>
                  Cohort B: Top 50% of the responses.
                </li>
                <li>
                  Cohort C: Bottom 50% of the responses.
                </li>
                <li>
                  Cohort D: Bottom 25% of the responses.
                </li>
              </ol>
              These cohorts provide an estimate in terms of what separates top performers from the rest. Our approach is not to provide micro ratings of each
              parameter but a high-level comparison that provides a relative rankings of the candidate.
            </p>
            <p align='justify'>
              Our models suggest an overall rate of “Shortlisted” for the candidate. We understand that for each job and culture the preferences can be different hence we also report a comprehensive rating of the candidate across multiple skill dimensions (these are elaborated in Page 2 of the report) as displayed in the table below. Some of the natural pointers on how the candidates might improve are also suggested in the pages that follow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interaction;
