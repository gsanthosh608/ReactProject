import React from "react";
import{useSelector, useDispatch} from 'react-redux';
import { increment,decrement,incrementByAmount } from "../Redux/CounterSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./Marge.css"
export default function MiddleEnd(){

    const navigate=useNavigate();
    const params=useParams();
    const count=useSelector(state=> state.counting.value);
    const dispatch=useDispatch();
    function Returning(){
navigate("/allbuttons/1234");
    };
    return(
       <div> <h1>Hello Welcome To MiddleEnds Images</h1>
        <button type="submit" onClick={Returning}>Home page</button>
        <br/>
        <div className="pair">
        <div>Count: {count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment5</button>
            </div>
        </div>
    )
}