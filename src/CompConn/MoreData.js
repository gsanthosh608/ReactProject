import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MoreData(){
    const navigate=useNavigate();
    const [fromData, setFormData]=useState({
        age: '',
        nationality: '',
        currentstate:''
    });
    const curage=useRef(null);
    const curnationality=useRef(null);
    const curstate=useRef(null);
    
    const handleSumbit=(v)=>{
        const {name, value}=t.target;
        setFormData(tri=>({
            ...tri,
            [name]: value
        })
        );
    }
    const handleChange=(m)=>{
       m.preventdefault();
       console.log(FormData);
       localStorage.setItem('user', fromData)
       navigate("/")
    }
    return(
        <div>
            <form onSubmit={handleSumbit}>
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" ref={curage} onChange={handleChange} />

                <label htmlFor="nationality">Nationality:</label>
                <input type="text" id="nationality" name="nationality" ref={curnationality} onChange={handleChange} />

                <label htmlFor="currentState">Current State:</label>
                <input type="text" id="currentState" name="currentState" ref={curstate} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
    
}