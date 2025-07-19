import {FaStar} from 'react-icons/fa'
import React from 'react'
import './styles.css'

export default function StarRating({numOfStars = 5}) {

  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  function handleClick(currentIndex){
    console.log("current idnex: ", currentIndex);
    setRating(currentIndex)
  }

  function handleMouseEnter(currentIndex){
    console.log(currentIndex)
    setHover(currentIndex)
  }

  function handleMouseLeave(currentIndex){
    console.log(currentIndex)
    setHover(rating)
  }

  return <div className='star-rating'>
    { 
      [...Array(numOfStars)].map((_, index) => {
        index += 1;

        return <FaStar 
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        key={index}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        size={40}
        />
      })
    }
    </div>
}