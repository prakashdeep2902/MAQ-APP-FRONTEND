import React, { useEffect } from 'react'
import './Result.css'
import { NavLink } from 'react-router-dom'
import ResultTable from '../ResultTable/ResultTable'
import { useDispatch, useSelector } from 'react-redux'
// import Actions

import { resetAllAction } from '../../redux/Question_reducer'
import { resetresultAction } from '../../redux/Result_reducer'
import { attemps_number, earnPoints_number, flagResult } from '../../helper/Helper'
import { usePublishResult } from '../../hooks/SetResult'


const Result = () => {

  const dispatch = useDispatch()

  const { questions: { queue, answer }, result: { result, userId } } = useSelector(state => state)
 





  const totalPoints = queue.length * 10;
  const attempts = attemps_number(result);
  const earnPoints = earnPoints_number(result, answer, 10)
  const flag = flagResult(totalPoints, earnPoints)

  useEffect(() => {

    console.log()

  })
  // **store user result*/
  usePublishResult({

    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed"
  });


  function OnRestart() {

    dispatch(resetAllAction())
    dispatch(resetresultAction())

  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <div className='resultv flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>
            {userId || ""}
          </span>
        </div>
        <div className=' flex'>
          <span>total quiz points:</span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className=' flex'>
          <span>Total Question:</span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className=' flex'>
          <span>Total Attempts:</span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className=' flex'>
          <span>total Earn points:</span>
          <span className='bold'>{earnPoints || 0}</span>

        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className='start'>
        <NavLink className="btn" to='/' onClick={OnRestart}>
          Restart
        </NavLink>
      </div>

      <div className='container'>
        {/* result table */}
        <ResultTable attempts={attempts} earnPoints={earnPoints} flag={flag}  ></ResultTable>
      </div>



    </div>
  )
}

export default Result
