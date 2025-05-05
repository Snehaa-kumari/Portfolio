import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import Footer from './components/Footer';
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
     </div>
     <Toaster />
    </>

    
  )
}

export default App
