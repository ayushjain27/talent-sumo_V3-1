import React, { useState } from 'react';
// import styles from './InteractionScorecard.module.css';

import ReactApexChart from 'react-apexcharts';


const InteractionScorecard = () => {

    const [state, setState] = useState({
        series: [{
            name: 'Series 1',
            data: [4, 2, 3, 2, 1],
        }],
        options: {
            chart: {
                type: 'radar',
                width: '100%',
                height: '100%',
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: true,
                dashArray: 0,
                colors: ['#ff6384'],
            },
            markers: {
                colors: ['#ff6384'],
            },
            fill: {
                opacity: 0.5,
                colors: ['#ff6384'],
            },
            // dataLabels: {
            //     enabled: true,
            //     background: {
            //         enabled: true,
            //         borderRadius: 2,
            //     },
            //     style: {
            //         colors: ['#ff6384']
            //     }
            // },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColor: '#000000',
                        fill: {
                            colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            xaxis: {
                categories: ['Likeability', 'Charm', 'Energy', 'Fluency', 'Confidence'],
                labels: {
                    show: true,
                    style: {
                        colors: ['#000', '#000', '#000', '#000', '#000', '#000'],
                        fontSize: '15px',
                    }
                },
            },
            yaxis: {
                show: false,
            },
            responsive: [{
                breakpoint: 500,
                options: {
                    chart: {
                        width: '100%',
                        height: '100%',
                    }
                },
                xaxis: {
                    labels: {
                        style: {
                            fontSize: '10px',
                        }
                    },
                },
            }]
        },

    });

    return (
        <>
            <h3 className='text-center mb-3' style={{ color: "#0b3c47" }}>INTERACTION SCORECARD</h3>
            <div className="container">
                <div className="row mt-5">
                    <div className="img-fluid col-md-6 m-auto">
                        <ReactApexChart
                            // eslint-disable-next-line
                            setState={setState}
                            options={state.options}
                            series={state.series}
                            type="radar"
                            style={{ borderColor: "#000" }}
                        />
                        <p>"likeability_aggregate", "charm_aggregate", "energy_aggregate", "fluency_aggregate", "confidence_aggregate"</p>
                        {/* <p>Sum(likeability_per_question)/number of questions</p>
                        <p>Sum(charm_per_question)/number of questions</p>
                        <p> Sum(energy_per_question)/number of questions</p> */}
                    </div>
                    <div className="col-md-6 m-auto">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6 align="justify" className='text-secondary'>
                                    Every human interaction demonstrates what human resources experts define as power skills.
                                    The attached spider chart demonstrates these traits that the AI models observe in the conversation.
                                    Depending upon the particular context of the interaction we may or may not display certain traits.
                                    Personality is not permanent and the models are a mere reflection of how you may be perceived by the others in the
                                    particular interaction. This chart and report will help you to reflect deeply on your own performance. In overall
                                    cohort scores in the power-skill areas are summarized as below.

                                    <p className='text-danger mt-3'>(Please review the variable section below for more information) :</p>
                                    <p> Likeability : likeability_agregate</p>
                                    <p>Charm : charm_agreegate</p>
                                    <p>Energy : energy_agreegate</p>
                                    <p>Fluency: fluency_agreegate</p>
                                    <p>Confidence: Confidence_agreegate</p>
                                    <p>Change “Rating Variables” to Power-Skills</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <table className={`${styles.table} table table-bordered text-center mb-5`} style={{ borderColor: "#c4933b" }}>
                <thead style={{ backgroundColor: "#c4933b" }}>
                    <tr>
                        <th scope="col">Likeability</th>
                        <th scope="col">Charm</th>
                        <th scope="col">Energy</th>
                        <th scope="col">Fluency</th>
                        <th scope="col">Confidence</th>
                        <th scope="col">Content Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>per_question_content_score</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}

export default InteractionScorecard;