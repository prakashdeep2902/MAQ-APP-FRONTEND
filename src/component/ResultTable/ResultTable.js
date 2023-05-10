import React from 'react'

const ResultTable = ({attempts,earnPoints,flag}) => {
    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>name</td>
                        <td>Attemps</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-body'>
                        <td>Daily Tuition</td>
                        <td>{attempts}</td>
                        <td>{earnPoints}</td>
                        <td style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}> {flag ? "Passed" : "Failed"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable
