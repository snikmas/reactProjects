// single selection
// multiple selection
import React from 'react'
import data from './data'
import './styles.css'

export default function Accordian(){

  const [selected, setSelected] = React.useState(null);
  const [multiSelectMode, setMultiSelectMode] = React.useState(false);
  const [multiple, setMultiple] = React.useState([]);
  
  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelect(getCurrentId){
    let copyMultiple = [...multiple];
    const currentId = copyMultiple.indexOf(getCurrentId)
    
    console.log(currentId);
    if(currentId == -1) copyMultiple.push(getCurrentId)
      else copyMultiple.splice(currentId, 1);

    setMultiple(copyMultiple);
  }


  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelectMode(!multiSelectMode)}>Enable {multiSelectMode ? "Single Selection" : "Multi Seleciton"}</button>
      <div className="accordian">
          {
            data && data.length > 0 ? ( 
              data.map(dataItem => (
                <div className='item'>
                  <div onClick={() => multiSelectMode ? handleMultiSelect(dataItem.id) : handleSingleSelection(dataItem.id)} className='title'>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    multiSelectMode ? 
                    multiple.indexOf(dataItem.id) !== -1 && 
                    <div className='content'>{dataItem.answer}</div> : 
                    selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
                  }
                </div>))
            ) : (<div>No data found !</ div>
          )}
      </div>      
    </div>)
}