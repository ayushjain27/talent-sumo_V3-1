import React from 'react';

const FeedbackSnapshot = () => {
    return (
        <>
            <div className='container'>
                <div className="card border-0 h-100">
                    <div className="card-body" style={{ color: "#0b3c47" }}>
                        <h3 className='card-title text-center'>FEEDBACK SNAPSHOT</h3>
                        <p align="justify">Our models suggest an overall rating of
                            “Interaction_score”,"Interaction_ID" for the
                            candidate. Based on the responses, we also report
                            a comprehensive rating of the candidate across
                            multiple skill dimensions  (these are elaborated
                            later) as displayed in the table below. Some of the
                            natural pointers on how the candidates might improve
                            are also suggested in the pages that follow.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackSnapshot;