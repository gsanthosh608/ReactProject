import React from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function Buttons(){
    console.log("welcome to buttons");
    const navigate=useNavigate();
    const params=useParams("id");
    console.log(params);
    function FrontEndClick(){
        navigate("/frontend");
        console.log("frontend button clicked");
    };
    function MiddleEndClick(){
        navigate("/middleend");
        console.log("middleend button clicked");
    };
    function BackEndClick(){
        navigate("/backend");
        console.log("backend button clicked");
    };
    return(
    <div>
        <button type="submit" onClick={FrontEndClick}>click here for FrontEnd</button>
        <button type="submit" onClick={MiddleEndClick}>click here for MiddleEnd</button>
        <button type="submit" onClick={BackEndClick}>click here for BackEnd</button>
    </div>
    );
}