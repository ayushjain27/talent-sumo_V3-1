import React from 'react';

const ContentRatings = () => {
    return (
        <>
            <div className='container'>
                <h3 className='text-center mb-3'>CONTENT RATINGS</h3>
                <p align="justify" className='mb-4'>We evaluate the content of the responses not only by the best possible answer to that
                    question but using our context cloud we are further enhancing the accuracy of what of answers might be relevant to
                    what kind of situation. Any candidate taking time to understand and align to the context in which he is operating
                    and using industry specific terminologies to articulate his point of view is likely to do well in the content
                    ratings. The top cohort rating (A) on more than 75% of the questions denotes high degree of proficiency and
                    accuracy in his answers.
                </p>
                <table className="table table-bordered text-center">
                    <thead className='table-warning'>
                        <tr>
                            <th scope="col">Match Score</th>
                            <th scope="col">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Greater than 90</td>
                            <td>Extremely precise & relevant answer</td>
                        </tr>
                        <tr>
                            <td>70 to 90%</td>
                            <td>Satisfactory answer with key points covered</td>
                        </tr>
                        <tr>
                            <td>50 to 70%</td>
                            <td>Highlights key aspects but is not complete</td>
                        </tr>
                        <tr>
                            <td>Less than 50%</td>
                            <td>Missing key aspects</td>
                        </tr>
                    </tbody>
                </table>
                <h5 className='mt-5 mb-3'>Question Specific Content Ratings :</h5>
                <table className="table table-bordered text-center mb-5">
                    <thead className='table-warning'>
                        <tr>
                            <th scope="col">Question #</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>70%</td>
                        </tr>
                    </tbody>
                </table>
                <div className='card-footer border-warning text-end'>
                    <strong>Overall Content Rating :</strong> <code>Content_score</code> of a <code>Interaction_ID</code>
                </div>
            </div>
        </>
    )
}

export default ContentRatings;