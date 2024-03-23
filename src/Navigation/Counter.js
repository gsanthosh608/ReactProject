import React from "react";
import{useSelector, useDispatch} from 'react-redux';
import { increment,decrement,incrementByAmount } from "../Redux/CounterSlice";
import { useNavigate } from "react-router-dom";


function Counter(){
    const navigate=useNavigate();
    const count=useSelector(state=> state.counting.value);
    const dispatch=useDispatch();
    function recounting(){
        navigate("/middleend")
    }
    return(
        <div>
            <h1>hello react</h1>
            <div>Count: {count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>IncrementBy 5</button>
             <button onClick={recounting}>click here</button>
        </div>
    );
}
export default Counter;