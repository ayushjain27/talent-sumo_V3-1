import React from "react";

const TopCandidates = () => {
  return (
    <>
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <h3 className="text-center mb-3" style={{ color: "#0b3c47" }}>
              TOP CANDIDATES OF THE MONTH REPORT
            </h3>
            <p align="justify">
              Each interaction is analyzed via our HCI models (Human-Computer Interaction) to detect the content accuracy and the way the
              content is delivered. Our model tracks basic elements (detailed later) and converts them into proprietary indicators.
            </p>
            <p align="justify">
              The AI algorithms rate each answer of the candidate to distribute them into four groups or cohorts, for each of the
              parameters we are tracking.
              <ol type="a">
                <li>
                  Cohort A: Top 25% of the responses.
                </li>
                <li>
                  Cohort B: Top 50% of the responses.
                </li>
                <li>
                  Cohort C: Bottom 50% of the response.
                </li>
                <li>
                  Cohort D: Bottom 25% of the response.
                </li>
              </ol>
            </p>
            <p align="justify">
              These cohorts provide an estimate in terms of what separates top performers from the rest. Our approach is not to provide
              micro ratings of each parameter but a high-level comparison that provides a relative rankings of the candidate. The current
              report is a leaderboard ranking of all ""shorlisted"" candidates i.e who are rated in the cohort A by the algorithm. This
              leaderboard is provide for hiring and training usage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCandidates;
