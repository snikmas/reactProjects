import './App.css'
import React from "react"
import ReactDOM from 'react-dom/client'
import "./components/Accordion/styles.css"


import Accordian from './components/Accordion'
import RandomColor from './components/RandomColor'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'


function App() {

  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={5}/> */}
      <ImageSlider url={`https://picsum.photos/v2/list`} pages={'1'} limit={10} />
    </div>
  )
}

export default App
