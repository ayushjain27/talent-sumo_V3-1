import React, { useState } from 'react';
import styles from "./GeneralVariables.module.css";

import { AiFillDashboard } from "react-icons/ai";
import { FaVolumeUp, FaCloud, FaRibbon } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { SiGrammarly } from "react-icons/si";

import ReactApexChart from 'react-apexcharts';

const GeneralVariables = () => {

    // const [volume, setVolume] = useState({
    //     series: [76, 67, 61, 90, 45],
    //     name: "Volume",
    //     options: {
    //         chart: {
    //             height: "100%",
    //             width: "100%",
    //             type: 'radialBar',
    //         },
    //         plotOptions: {
    //             radialBar: {
    //                 offsetY: 0,
    //                 startAngle: -90,
    //                 endAngle: 90,
    //                 hollow: {
    //                     background: 'transparent',
    //                     image: undefined,
    //                 },
    //                 dataLabels: {
    //                     name: {
    //                         show: true,
    //                     },
    //                     value: {
    //                         show: true,
    //                     }
    //                 }
    //             }
    //         },
    //         title: {
    //             text: 'VOLUME SCALE',
    //             align: 'center',
    //         },
    //         colors: ['#dc3545', '#ffc107', '#198754', '#ffc107', '#dc3545'],
    //         labels: ['Danger', 'Warning', 'Success', 'Warning', 'Danger'],
    //         legend: {
    //             show: true,
    //             fontSize: '16px',
    //             position: 'top',
    //             labels: {
    //                 useSeriesColors: true,
    //             },
    //             markers: {
    //                 size: 0
    //             },
    //             formatter: function (seriesName, opts) {
    //                 return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    //             },
    //         },
    //         responsive: [{
    //             breakpoint: 480,
    //             options: {
    //                 chart: {
    //                     width: '100%',
    //                     height: '100%',
    //                 }
    //             }
    //         }]
    //     },
    // });

    // const [pitch, setPitch] = useState({
    //     series: [60, 70, 50, 70, 45],
    //     name: "Pitch",
    //     options: {
    //         chart: {
    //             height: "100%",
    //             width: "100%",
    //             type: 'radialBar',
    //         },
    //         plotOptions: {
    //             radialBar: {
    //                 offsetY: 0,
    //                 startAngle: -90,
    //                 endAngle: 90,
    //                 hollow: {
    //                     background: 'transparent',
    //                     image: undefined,
    //                 },
    //                 dataLabels: {
    //                     name: {
    //                         show: true,
    //                     },
    //                     value: {
    //                         show: true,
    //                     }
    //                 }
    //             }
    //         },
    //         title: {
    //             text: 'PITCH RANGE',
    //             align: 'center',
    //         },
    //         colors: ['#dc3545', '#ffc107', '#198754', '#ffc107', '#dc3545'],
    //         labels: ['Danger', 'Warning', 'Success', 'Warning', 'Danger'],
    //         legend: {
    //             show: true,
    //             fontSize: '16px',
    //             position: 'top',
    //             labels: {
    //                 useSeriesColors: true,
    //             },
    //             markers: {
    //                 size: 0
    //             },
    //             formatter: function (seriesName, opts) {
    //                 return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    //             },
    //         },
    //         responsive: [{
    //             breakpoint: 480,
    //             options: {
    //                 chart: {
    //                     width: '100%',
    //                     height: '100%',
    //                 }
    //             }
    //         }]
    //     },
    // });

    return (
        <>
            <div className='container'>
                <h3 className='text-center mb-3' style={{ color: "#0b3c47" }}>GENERAL VARIABLES</h3>
                <div className="row row-cols-1 row-cols-md-2 justify-content-center g-4">
                    <div className="col">
                        <div className={`${styles.card} card h-100`}>
                            <h5 className={`${styles.cardHeader} card-header text-white`}><AiFillDashboard className={`me-1 ${styles.icon}`} />Pace</h5>
                            <div className="card-body">
                                <h6 align="justify" className='card-text'>
                                    <strong>Words per minute : </strong>
                                </h6>
                                <h6 align="justify" className='card-text'>
                                    <strong>Ideal words per minute : </strong> xx words/minute
                                </h6>
                                <div className='mb-3'>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <input type="range" className="form-range" value={109} min="50" max="250" id="customRange2" disabled />
                                </div>
                                <h6 align="justify" className='card-text'>
                                    <strong>Takeaway : </strong> Speaking too slowly or too quickly denotes nervousness on part of the candidate. Please note that this is the average pace across the entire Interaction. This will help you determine if you need to control the pace as you go through the Interactions. (We have provided an ideal benchmark range for comparison purposes)
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-dark h-100`}>
                            <h5 className={`${styles.cardHeader} card-header text-white`}><FaRibbon className={`${styles.icon} me-1`} />Gesture</h5>
                            <div className="card-body">
                                <h6 align="justify" className='card-text'>
                                    <strong>Gesture Score : </strong>Estimated_Gesture_score
                                </h6>
                                <div className='mb-3'>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <input type="range" className="form-range" value={6} min="0" max="10" id="customRange2" disabled />
                                </div>
                                <h6 align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>Hand gestures play an important part in your overall personality. Due to limitations of the
                                    camera recording it may not be always possible to capture them depending on how you have recorded your own Interaction. A
                                    good score indicates you have used your hand gestures to positively reinforce your Interaction answers. Consider using your
                                    hands naturally like in any other live conversation even for online Interactions. If this score is blank for you - in
                                    indicates you have opted for an audio only Interaction.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-dark h-100`}>
                            <h5 className={`${styles.cardHeader} card-header text-white`}><FaCloud className={`${styles.icon} me-1`} />Word Cloud</h5>
                            <div className="card-body">
                                <h6 align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>Volume is in range of 1-100. We align with decibel calculations * Hertz is the unit of pitch
                                    calculation. It is associated with the frequency of the audio signals.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`${styles.card} card border-dark h-100`}>
                            <h5 className={`${styles.cardHeader} card-header text-white`}><BsEmojiSmileFill className={`${styles.icon} me-1`} />Sentiment Analysis</h5>
                            <div className="card-body">
                                <h6 align="justify" className='card-text'>
                                    <strong>Aggregate dominant Sentiment : </strong>Sentiment_score
                                </h6>
                                <div className='mb-3'>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <input type="range" className="form-range" value={50} min="0" max="100" id="customRange2" disabled />
                                </div>
                                <h6 align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>This shows how your emotions are understood by the people. While most candidates display
                                    positive emotions naturally in few cases it might be negative. Being a responsible AI organization, we do not recommend
                                    any adverse actions based on it - only something should be further investigated.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} card border-dark h-100 mt-4`}>
                    <h5 className={`${styles.cardHeader} card-header text-white`}><SiGrammarly className={`${styles.icon} me-1`} />Grammar and Accent Score</h5>
                    <div className="card-body">
                        <h6 align="justify" className='card-text'>
                            <strong>Grammar and Accent Score : </strong>grammar_score
                        </h6>
                        <div className="mb-3">
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <input type="range" className="form-range" value={17} min="2" max="22" id="customRange2" disabled />
                        </div>

                        <h6 align="justify" className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam enim atque omnis, facilis
                            laudantium aliquam aperiam. Veniam autem ut ducimus iure, perferendis suscipit earum et, blanditiis
                            nemo quis, dignissimos ad excepturi expedita laborum quibusdam quod magni odio quisquam vel rerum
                            totam illum animi itaque sint. Inventore iure corporis suscipit consequatur eaque quis obcaecati
                            unde atque, rem qui repellendus modi itaque repudiandae rerum explicabo aliquid ea sunt dignissimos
                            deleniti excepturi necessitatibus! Quod rerum, consectetur, atque velit quis beatae nostrum illum
                            facilis ab, suscipit culpa unde sequi! Suscipit vero et exercitationem id, eaque dignissimos fuga
                            magnam eligendi aliquid reprehenderit quis. Eum.
                        </h6>
                    </div>
                </div>
                <div className={`${styles.card} card border-dark h-100 mt-4`}>
                    <h5 className={`${styles.cardHeader} card-header text-white`}><FaVolumeUp className={`me-1 ${styles.icon}`} />Volume & Pitch</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 align="justify" className='card-text'>
                                    <strong>Volume Scale (0-100) : "volume"</strong>
                                </h6>
                                <h6 align="justify" className='card-text mb-5'>
                                    <strong>Ideal Volume Scale : </strong>70-80 Db
                                </h6>
                                {/* <ReactApexChart
                                    setState={setVolume}
                                    options={volume.options}
                                    series={volume.series}
                                    type="radialBar"
                                /> */}
                                <div className='mb-3'>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <input type="range" className="form-range" value={50} min="0" max="100" id="customRange2" disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h6 align="justify" className='card-text'>
                                    <strong>Pitch Range : "pitch"</strong>
                                </h6>
                                <h6 align="justify" className='card-text mb-5'>
                                    <strong>Ideal Pitch Range : </strong>650-850 Hertz
                                </h6>
                                {/* <ReactApexChart
                                    setState={setPitch}
                                    options={pitch.options}
                                    series={pitch.series}
                                    type="radialBar"
                                /> */}
                                <div className='mb-3'>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <input type="range" className="form-range" value={700} min="300" max="1250" id="customRange2" disabled />
                                </div>
                            </div>
                        </div>
                        <h6 align="justify" className='card-text'>
                            <strong>Takeaway : </strong>Please take a moment to reflect the words you used in the Interaction. This also reflects how
                            the Interaction perceives you are is likely to remember about you, once the Interaction is over. Are these the power words
                            that are related to the subject matter of the Interaction that presents you as strong candidate? Please take a moment to
                            reflect and craft alternate answers if these are the not the words/context you wish to convey.
                        </h6>
                        <h6 align="justify" className='card-text'>
                            The volume, pitch and voice modulation make it easier for us to be understood by others easily. Scientific research has
                            established the boundaries of the voice and pitch that are sounds likeable to the human ears. The values above indicate
                            whether your volume and pitch are within the range or are outside of it.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralVariables;