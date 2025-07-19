import './App.css'
import React from "react"
import ReactDOM from 'react-dom/client'
import "./components/Accordion/styles.css"


import Accordian from './components/Accordion'
import RandomColor from './components/RandomColor'
import StarRating from './components/StarRating'

function App() {

  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating numOfStars={5}/>
    </div>
  )
}

export default App
