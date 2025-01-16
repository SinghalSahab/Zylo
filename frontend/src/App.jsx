import React from 'react'
import {Routes , Route} from 'react-router-dom'
import {CaptainLogin, CaptainSignup, Start, UserLogin, UserSignup , UserHome, UserProtectedWrapper, UserLogout, CaptainProtectedWrapper, CaptainHome, CaptainLogout} from './pages'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/users/login' element={<UserLogin />} />
        <Route path='/users/register' element={<UserSignup />} />
        <Route path='/captains/login' element={<CaptainLogin />} />
        <Route path='/captains/register' element={<CaptainSignup />} />
        <Route path='/users/home' element={<UserProtectedWrapper><UserHome /></UserProtectedWrapper>} />
        <Route path='/users/logout' element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
        <Route path='/captains/home' element={<CaptainProtectedWrapper><CaptainHome /></CaptainProtectedWrapper>} />
        <Route path='/captains/logout' element={<CaptainProtectedWrapper><CaptainLogout /> </CaptainProtectedWrapper> } />
      </Routes>
    </div>
  )
}

export default App