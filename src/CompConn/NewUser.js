import React, { useRef, useState } from "react";
import { useNavigate , useParams} from "react-router-dom";
import "./NewUser.css"
import ComnucationBar from "./ComnucationBar";
export default function NewUser(){
    const navigate=useNavigate();
    const Params=useParams();
    const [formData,setFormData]=useState({
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        Phonenumber: ''
    });
    const fnameref=useRef(null);
    const lnameref=useRef(null);
    const emailref=useRef(null);
    const dobref=useRef();
    const pnumberref=useRef(8722702276);

    const handleChange=(s)=>{
        const{ name, value}= s.target;
        setFormData(prevstate =>({
            ...prevstate,
            [name]: value
        })
        );
    }
    const handleSumbit=(b)=>{
        b.preventDefault();
        console.log(formData);
        localStorage.setItem('user', formData)
        navigate("/comunicate");
    }
    return(
        <div id="pip">
            <h1>personal deatails</h1>
            <form onSubmit={handleSumbit}>
                <label>
                    First Name:
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} ref={fnameref} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} ref={lnameref} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.emailmail} onChange={handleChange} ref={emailref} />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input type="date" name="Dob" value={formData.dob} onChange={handleChange} ref={dobref} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="number" name="phonenumber" value={formData.Phonenumber} onChange={handleChange} ref={pnumberref} />
                </label>
                <br />
                <button type="submit">Next</button>
            </form>

        </div>
    )
}