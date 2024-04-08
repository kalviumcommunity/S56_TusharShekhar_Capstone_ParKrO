import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import About from './Component/About'
import FAQ from './Component/FAQ'
import {Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
    </Routes>
    </>
  )
}

export default App
