import React from 'react'

const ResultTable = ({attempt,earnPoints}) => {
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
                        <td>{attempt}</td>
                        <td>{earnPoints}</td>
                        <td> {earnPoints>=30?'passed':'faild'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable
