import './App.css'
import React from "react"
import ReactDOM from 'react-dom/client'
import "./components/Accordion/styles.css"


import Accordian from './components/Accordion'
import RandomColor from './components/RandomColor'

function App() {

  return (
    <div className='App'>
      {/* <Accordian /> */}
      <RandomColor />
    </div>
  )
}

export default App
