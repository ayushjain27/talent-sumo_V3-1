import React from 'react';
import styles from "./GeneralVariables.module.css";

import { AiFillDashboard } from "react-icons/ai";
import { FaVolumeUp, FaCloud, FaRibbon } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";

const GeneralVariables = () => {
    return (
        <>
            <div className='container'>
                <h3 className='text-center mb-3'>GENERAL VARIABLES</h3>
                <div className="row row-cols-1 row-cols-md-2 justify-content-center g-4">
                    <div className="col">
                        <div className="card border-warning h-100">
                            <h5 className="card-header border-warning bg-warning"><AiFillDashboard className={`me-1 ${styles.icon}`} />Pace</h5>
                            <div className="card-body">
                                <p align="justify" className='card-text'>
                                    <strong>Words per minute : </strong>
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Ideal words per minute : </strong> xx words/minute
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Takeaway : </strong> Speaking too slowly or too quickly denotes nervousness on part of the candidate. Please note that this is the average pace across the entire Interaction. This will help you determine if you need to control the pace as you go through the Interactions. (We have provided an ideal benchmark range for comparison purposes)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning h-100">
                            <h5 className="card-header border-warning bg-warning"><FaVolumeUp className={`me-1 ${styles.icon}`} />Volume & Pitch</h5>
                            <div className="card-body">
                                <p align="justify" className='card-text'>
                                    <strong>Volume Scale (0-100) : </strong>
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Ideal Volume Scale : </strong>70-80 Db
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Pitch Range : </strong>
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Ideal Pitch Range : </strong>30-80 Hertz
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>Please take a moment to reflect the words you used in the Interaction. This also reflects how
                                    the Interaction perceives you are is likely to remember about you, once the Interaction is over. Are these the power words
                                    that are related to the subject matter of the Interaction that presents you as strong candidate? Please take a moment to
                                    reflect and craft alternate answers if these are the not the words/context you wish to convey.
                                </p>
                                <p align="justify" className='card-text'>
                                    The volume, pitch and voice modulation make it easier for us to be understood by others easily. Scientific research has
                                    established the boundaries of the voice and pitch that are sounds likeable to the human ears. The values above indicate
                                    whether your volume and pitch are within the range or are outside of it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning h-100">
                            <h5 className="card-header border-warning bg-warning"><FaCloud className={`${styles.icon} me-1`} />Word Cloud</h5>
                            <div className="card-body">
                                <p align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>Volume is in range of 1-100. We align with decibel calculations * Hertz is the unit of pitch
                                    calculation. It is associated with the frequency of the audio signals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning h-100">
                            <h5 className="card-header border-warning bg-warning"><BsEmojiSmileFill className={`${styles.icon} me-1`} />Sentiment Analysis</h5>
                            <div className="card-body">
                                <p align="justify" className='card-text'>
                                    <strong>Aggregate dominant Sentiment : </strong>Sentiment_score
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>This shows how your emotions are understood by the people. While most candidates display
                                    positive emotions naturally in few cases it might be negative. Being a responsible AI organization, we do not recommend
                                    any adverse actions based on it - only something should be further investigated.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning h-100">
                            <h5 className="card-header border-warning bg-warning"><FaRibbon className={`${styles.icon} me-1`} />Gesture</h5>
                            <div className="card-body">
                                <p align="justify" className='card-text'>
                                    <strong>Gesture Score : </strong>Estimated_Gesture_score
                                </p>
                                <p align="justify" className='card-text'>
                                    <strong>Takeaway : </strong>Hand gestures play an important part in your overall personality. Due to limitations of the
                                    camera recording it may not be always possible to capture them depending on how you have recorded your own Interaction. A
                                    good score indicates you have used your hand gestures to positively reinforce your Interaction answers. Consider using your
                                    hands naturally like in any other live conversation even for online Interactions. If this score is blank for you - in
                                    indicates you have opted for an audio only Interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralVariables;