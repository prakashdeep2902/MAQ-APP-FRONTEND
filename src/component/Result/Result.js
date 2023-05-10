import React, { useEffect } from 'react'
import './Result.css'
import { NavLink } from 'react-router-dom'
import ResultTable from '../ResultTable/ResultTable'
import { useDispatch, useSelector } from 'react-redux'
// import Actions

import { resetAllAction } from '../../redux/Question_reducer'
import { resetresultAction } from '../../redux/Result_reducer'
import { attemps_number, earnPoints_number } from '../../helper/Helper'


const Result = () => {

  const dispatch = useDispatch()
  const { questions: { queue, answer }, result: { result, userId } } = useSelector(state => state)
  console.log(result)


  useEffect(() => {
    
    console.log(attempt,earnPoints)

  })

  const totalPoints=queue.length * 10;
  const attempt=attemps_number(result)
  const earnPoints=earnPoints_number(result,answer)
  
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
            Daily Tuition
          </span>
        </div>
        <div className=' flex'>
          <span>total quiz points:</span>
          <span className='bold'>{totalPoints}</span>
        </div>
        <div className=' flex'>
          <span>Total Question:</span>
          <span className='bold'>{result.length}</span>
        </div>
        <div className=' flex'>
          <span>Total Attempts:</span>
          <span className='bold'>{attempt}</span>
        </div>
        <div className=' flex'>
          <span>total Earn points:</span>
          <span className='bold'>{earnPoints} </span>
    
        </div>
        <div className=' flex'>
          <span>result</span>
          <span  style={{color:`${earnPoints>=30?'green':'red'}`}} className='bold'> {earnPoints>=30?'passed':'faild'}</span>
        </div>
      </div>

      <div className='start'>
        <NavLink className="btn" to='/' onClick={OnRestart}>
          Restart
        </NavLink>
      </div>

      <div className='container'>
        {/* result table */}
        <ResultTable attempt={attempt} earnPoints={earnPoints}  ></ResultTable>
      </div>



    </div>
  )
}

export default Result
