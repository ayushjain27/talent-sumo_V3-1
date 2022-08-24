import React, { useState } from 'react';

import ReactApexChart from 'react-apexcharts';

const ContentRatings = () => {

    const [state, setState] = useState({
        series: [{
            name: "rating",
            data: [40, 70, 50, 60, 90, 30, 47, 85, 91, 15]
        }],
        options: {
            chart: {
                type: 'bar',
                height: "100%",
                width: "100%",
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                type: 'category',
                categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'],
                title: {
                    text: 'Number of Questions',
                    style: {
                        fontSize: '14px',
                    }
                },
            },
            yaxis: {
                show: true,
                title: {
                    text: 'Rating in %',
                    style: {
                        fontSize: '14px',
                    }
                },
            },
            dataLabels: {
                enabled: true,
                formatter: (value) => {
                    return value + '%';
                }
            },
            // plotOptions: {
            //     bar: {
            //         horizontal: true
            //     }
            // },
            colors: "#cc6f5f",
            grid: {
                show: true,
                borderColor: '#cc6f5f',
            },
            responsive: [{
                breakpoint: 500,
                options: {
                    chart: {
                        width: '100%',
                        height: '100%',
                    }
                },
            }]
        },
    });

    return (
        <>
            <div className='container'>
                <h3 className='text-center mb-3' style={{ color: "#0b3c47" }}>CONTENT RATINGS</h3>
                <h6 align="justify" className='mb-4 text-secondary'>We evaluate the content of the responses not only by the best possible answer to that
                    question but using our context cloud we are further enhancing the accuracy of what of answers might be relevant to
                    what kind of situation. Any candidate taking time to understand and align to the context in which he is operating
                    and using industry specific terminologies to articulate his point of view is likely to do well in the content
                    ratings. The top cohort rating (A) on more than 75% of the questions denotes high degree of proficiency and
                    accuracy in his answers.
                </h6>
                <table className="table table-bordered text-center" style={{ borderColor: "#cc6f5f" }}>
                    <thead style={{ backgroundColor: "#cc6f5f" }}>
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
                <div className='d-flex justify-content-center mx-auto mt-5'>
                    <ReactApexChart
                        setState={setState}
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height={500}
                        width={500}
                        style={{ borderColor: "#000" }}
                    />
                </div>

                {/* <table className="table table-bordered text-center mb-5" style={{ borderColor: "#c4933b" }}>
                    <thead style={{ backgroundColor: "#c4933b" }}>
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
                </table> */}

                <div className='card-footer border-dark text-end'>
                    <strong>Overall Content Rating :</strong> <code>Content_score</code> of a <code>Interaction_ID</code>
                </div>
            </div>
        </>
    )
}

export default ContentRatings;