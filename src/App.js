import './App.css';
import React from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [Width ,setWidth] = useState(50);
  const [Border,setBorder]=useState("groove");
  const [boxColor , setboxColor] = useState("#ec42f5");
  const [rotate,setRotate]=useState(20);
  const [topMargin,settopMargin] = useState(20);
  const [roundedEdge ,setroundedEdge] = useState(20);

  return (

    <div className="App">
      
      <div className='control'>
        <label>Width</label>
        <input type="range" className="form-range" min="0" max="50" step="0.005" value={Width} onChange={(event)=>{setWidth(event.target.value)}}></input>
        <label>Border type</label>
        <input type = "text" value = {Border} onChange={(event)=>{setBorder(event.target.value)}}></input>
        <br /><br />
        <label> Box Color </label><br/>
        <input type="color" value={boxColor} onChange={(event)=>{setboxColor(event.target.value)}}></input>
        <br/>
        <br/>
        <label> Roate your box </label>
        <input type="range" min = "0" max = '360' value={rotate} onChange ={(event)=>{setRotate(event.target.value)}}></input>

        <br/>
        <br/>
        <label> Margin Top </label>
        <input type="range" min = "0" max = '360' value={topMargin} onChange ={(event)=>{settopMargin(event.target.value)}}></input>
        <br/>
        <br/>
        <label> Round your box edge </label>
        <input type="range" min = "0" max = '1360' value={roundedEdge} onChange ={(event)=>{setroundedEdge(event.target.value)}}></input>



      </div>
      <div className='output'>
         <div className='box' style={{border:`${Width}px ${Border}` , backgroundColor:`${boxColor}` , transform:`rotate(${rotate}deg)` ,marginTop:`${topMargin}px` , borderRadius:`${roundedEdge}px`}}>
            border = {Width}px {Border} <br/>
            background-color = {boxColor}<br/>
            transform = rotate({rotate}deg)<br/>
            margin-top={topMargin}px<br/>
            border-radius={roundedEdge}px<br/>
          </div>     
      </div>
    </div>
  );
}

export default App;
