import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function BackEnd(){
    const navigate=useNavigate();
    const params=useParams();
    function Returning(){
    navigate("/allbuttons/555");
    };
    
    return(
        <div>
            <h1>Hello Welcome To BackEnds Images</h1>
            <button type="submit" onClick={Returning}>buttons page</button>
        </div>
    )
}