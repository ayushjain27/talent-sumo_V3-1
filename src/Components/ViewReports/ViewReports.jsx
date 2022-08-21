import React from 'react';
import styles from './ViewReports.module.css';

import { Link } from 'react-router-dom';

const ViewReports = () => {
    return (
        <>
            <style jsx="true">
                {`
                    .button {
                        border-radius : 0;
                    }
                `}
            </style>
            <div className="container mt-5">
                <div className="d-grid col-md-6 mx-auto">
                    <div className={`${styles.card} card`}>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <label htmlFor="testId" className="col-sm-2 col-form-label fw-bold">Test ID :</label>
                                    <div className="col-sm-10">
                                        <select className="form-select" id="testId" aria-label="Default select example">
                                            <option value="Select...">Select...</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row d-flex mt-5'>
                    <div className="col-lg-6">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr className='table-secondary'>
                                    <th className='text-center' colspan="5">Individual Reports</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th scope='col'>Candidate ID</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Interaction ID / Response</th>
                                    <th scope='col'>Individual Report</th>
                                    <th scope='col'>Certificate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>64747</td>
                                    <td>Bhavya Khurana</td>
                                    <td>
                                        <Link to="/response" target="_blank">
                                            <button className='btn btn-dark button'>123456</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/report" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Report
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/certificate" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Certificate
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>64747</td>
                                    <td>Bhavya Khurana</td>
                                    <td>
                                        <Link to="/response" target="_blank">
                                            <button className='btn btn-dark button'>654789</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/report" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Report
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/certificate" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Certificate
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>64748</td>
                                    <td>Abc</td>
                                    <td>Abc</td>
                                    <td>
                                        <Link to="/report" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Report
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/certificate" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Certificate
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr className='table-secondary'>
                                    <th className='text-center' colspan="4">Monthly Leaderboard	</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">Month</th>
                                    <th scope="col">Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Date</td>
                                    <td>
                                        <Link to="/leaderboardReport" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Report
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>
                                        <Link to="/leaderboardReport" target="_blank">
                                            <button className='btn btn-dark button'>
                                                View Report
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewReports;