import React from 'react'
import './styles.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

function ImageSlider({url, limit = 5, page = 1}) {

  const [images, setImages] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [errorMsg, setErrorMsg] = React.useState(null)
  const [loading, setLoading] = React.useState(false);

  async function fetchImages(getUrl) {
    try{
      setLoading(true);

      const resp = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await resp.json(); // remember this line

      if(data){
        setImages(data)
        setLoading(false)
      }

      console.log(data)

    } catch(error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if(url !== '') fetchImages(url)
  }, [url])

  function handlePrevious(){
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext(){
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }


  if(loading){
    return <div>Loading Data. Please Wait</div>
  }

  if(errorMsg !== null){
    return <div>Error occured: {errorMsg}</div>
  }


  return (
    <div className="container">
      <BsArrowLeftCircleFill 
        onClick={handlePrevious}
        className='arrow arrow-left'/>
      { images && images.length ? 
        images.map((imageItem, index) => (
          <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
          />
        ))
        : null}

        <BsArrowRightCircleFill 
          onClick={handleNext}
          className='arrow arrow-right' />
        <span className='circle-indicators'>
        {
          images && images.length ? 
          images.map((_, index) => <button
          key={index}
          className={
            currentSlide === index ? 
            "current-indicator" : "current-indicator update-current-indicator"
          }
          ></button>)
          : null
        }
      </span>
    </div>




  )
}

export default ImageSlider