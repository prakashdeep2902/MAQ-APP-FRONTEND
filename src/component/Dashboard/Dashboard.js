import React, { useRef } from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserId } from '../../redux/Result_reducer'
const Dashboard = () => {

  const inputRef = useRef(null)
  const dispatch = useDispatch()
  function startQuiz() {

    if (inputRef.current?.value) {

       dispatch(setUserId(inputRef.current?.value))
    }
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>you will we asked 10 questions one after another. </li>
        <li>10 points is awarded for the correct answer </li>
        <li>Each question has three options you can choose only one options </li>
        <li>you can review and change answer before the quiz options </li>
        <li> the result will declared at the end of quiz </li>
      </ol>
      <form id='form'>
        <input ref={inputRef} className='userid' type="text" placeholder='Username' />
      </form>
      <div className='start'>
        <NavLink className="btn" to='/quiz' onClick={startQuiz}>
          Start Quiz
        </NavLink>
      </div>
    </div>
  )
}

export default Dashboard
