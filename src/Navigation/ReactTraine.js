import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css"
export default function ReactTraine(){

const [studentName, setStudentName] = useState(null)

function setName(e){
  setStudentName(e.target.value)
}

  const navigate=useNavigate();
  const Result=(sname)=>{
    console.log('sname',studentName,typeof studentName)
   if(typeof studentName==='string'){
    return navigate("/co");
   }
  }
  return(
    <div className="hhii">
      <label className="q" for="a">Enter your name: </label>
      <input id="a" name="sname" value={studentName} onChange={setName}></input>
      <button id="p" type="submit" onClick={Result}>click here</button>
     </div>
  );
}

