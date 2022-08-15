import React from 'react';
import styles from './InteractionScorecard.module.css';

const InteractionScorecard = () => {
    return (
        <>
            <h3 className='text-center mb-4'>INTERACTION SCORECARD</h3>
            <table className={`${styles.table} table table-bordered text-center`}>
                <thead className='table-warning'>
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
            </table>
        </>
    )
}

export default InteractionScorecard;