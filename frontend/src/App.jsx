import React from 'react'
import {Routes , Route} from 'react-router-dom'
import {CaptainLogin, CaptainSignup, Start, UserLogin, UserSignup } from './pages'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/users/login' element={<UserLogin />} />
        <Route path='/users/register' element={<UserSignup />} />
        <Route path='/captains/login' element={<CaptainLogin />} />
        <Route path='/captains/register' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App