
/* ========================= RandomColor ========================= */




/* ========================== ========= ========================== */

import React from 'react'

export default function RandomColor(){
  const [typeOfColor, setTypeOfColor] = React.useState('hex');
  const [color, setColor] = React.useState("#000000");

  function randomColorUtility(length){
    return Math.floor(Math.random() * length);
  }


  function handleHexColor(){
    // #123456
    const hex = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'; //starts from #

    for(let i = 0; i < 6; i++){ 
      hexColor += hex[randomColorUtility(hex.length)]
    }

    console.log(hexColor);
    setColor(hexColor);
    
  }


  function handleRgbColor(){

    
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    let rgb = `rgb(${r},${g},${b})`
    setColor(rgb)
  }

  React.useEffect(() => {
    if(typeOfColor === 'rgb') handleRgbColor() 
    else handleHexColor()
  }, [typeOfColor])



  return <div style={{
    width: '100vw',
    height: '100vh',
    background: color
  }}>
    <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
    <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
    <button onClick={typeOfColor === 'hex' ? handleHexColor : handleRgbColor}>Generate Random Color</button>

    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      color: '#fff',
      height: '90vh'
    }}>
      <h3 style={{fontSize: "25px", fontWeight: "200"}}>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
      <h1 style={{fontSize: "25px", fontWeight: "200"}}>{color}</h1>
    </div>
  </div>
}