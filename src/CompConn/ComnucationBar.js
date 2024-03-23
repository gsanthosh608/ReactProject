import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Comuni.css";
export default function ComnucationBar(){
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        adress: '',
        gender: '',
        fathername: '',
        mothername: ''   
     });
     const adressref=useRef(null);
     const genderref=useRef(null);
     const fathernameref=useRef(null);
     const mothernameref=useRef(null);

     const handleChange=(t)=>{
        const {name,value}=t.target;
        setFormData(prei=>({
            ...prei,
            [name]: value
        })
        );
     }
     const handleSumbit=(c)=>{
        c.preventDefault();
        console.log(formData);
        localStorage.setItem('user', formData)
        navigate("./moredata")
     }
     function GoBack(){
        navigate("./newuser")
     }

     return(
        <div className="dd">
            <form onSubmit={handleSumbit}>
        <label htmlFor="adress">Address:</label>
        <input type="text" id="adress" name="adress" ref={adressref} onChange={handleChange} value={formData.adress} />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" ref={genderref} onChange={handleChange} value={formData.gender}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label htmlFor="fathername">Father's Name:</label>
        <input type="text" id="fathername" name="fathername" ref={fathernameref} onChange={handleChange} value={formData.fathername} />

        <label htmlFor="mothername">Mother's Name:</label>
        <input type="text" id="mothername" name="mothername" ref={mothernameref} onChange={handleChange} value={formData.mothername} />

        <button type="submit">Next</button>
        <button type="submit" onClick={GoBack}>Go back</button>
    </form>
        </div>
     )
}