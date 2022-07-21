import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    {/*Bootstrap container*/}
    <Container className='mb-4'>
    {/*Specifying Routes*/}
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Container>
    </>
  )
}

export default App
