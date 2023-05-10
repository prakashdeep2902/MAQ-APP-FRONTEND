import React, { useEffect, useState } from 'react'
import Questions from '../Questions/Questions'
import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrvQuestion } from '../../hooks/FetchQuestions'
import { PushAnswer } from '../../hooks/SetResult'

import { Navigate } from 'react-router-dom'




const Quiz = () => {

  const [check, setChecked] = useState(undefined)
  let { queue, trace } = useSelector((state) => state.questions)
  let result = useSelector((state) => state.result.result);
  const dispatch = useDispatch()


  function onPrev() {

    dispatch(MovePrvQuestion())
  }



  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())
      // insert a new result in the array. *
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }
    // reset the value of the checked
    setChecked(undefined)

  }

  function onChecked(check) {
    setChecked(check)
    // console.log("check",check)
  }
  // finished exam after last question

  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'}></Navigate>


  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <Questions onChecked={onChecked}></Questions>
      <div className='grid'>
        {trace > 0 && <button className='btn prev' onClick={onPrev}>Prev</button>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}

export default Quiz
