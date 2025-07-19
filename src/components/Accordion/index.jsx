// single selection
// multiple selection
import React from 'react'
import data from './data'
import './styles.css'

export default function Accordian(){

  const [selected, setSelected] = React.useState(null);

  function handleSigleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }

  return (
    <div className="wrapper">
      <div className="accordian">
          {
            data && data.length > 0 ? ( 
              data.map(dataItem => (
                <div className='item'>
                  <div onClick={() => handleSigleSelection(dataItem.id)} className='title'>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    selected === dataItem.id ? 
                      <div className='content'>
                        {dataItem.answer}
                      </div>
                    : null
                  }
                </div>))
            ) : (<div>No data found !</ div>
          )}
      </div>      
    </div>)
}