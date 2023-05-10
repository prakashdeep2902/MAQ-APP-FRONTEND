import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Quiz from './component/Quiz/Quiz'
import Result from './component/Result/Result'
import { CheckUserExist } from './helper/Helper'
const App = () => {


  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
          <Route exact path="/quiz" element={ <CheckUserExist><Quiz></Quiz></CheckUserExist>}></Route>
          <Route exact path="/result" element={ <CheckUserExist><Result></Result></CheckUserExist>}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
