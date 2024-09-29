import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import About from './Component/About'
import FAQ from './Component/FAQ'
import SignUp from './Component/SignUp'
import Profile from './Component/Profile'
import {Route,Routes } from 'react-router-dom'
import QRcode from './Component/QRcode'
import Popular from './Component/Popular'
import ForgotPassword from './Component/ForgotPassword'
import ResetPassword from './Component/ResetPassword'
import VerifyOtp from './Component/VerifyOTP'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/generate' element={<QRcode/>}></Route>
      <Route path='/profiles' element={<Profile/>}></Route>
      <Route path='/popular' element={<Popular/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/verify-otp' element={<VerifyOtp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
    </>
  )
}

export default App
