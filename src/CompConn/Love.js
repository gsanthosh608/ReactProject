import React, {useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Loging.css"
export default function Love(){
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const usernameref=useRef(null);
    const passwordref=useRef(null);

    const handleChange = (f) => {
        const { name, value } = f.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
    })
    );
    }

        const handleSumbit =(g) =>{
            g.preventDefault();
            console.log(formData);
            localStorage.setItem('user',formData)
            navigate("/newuser")
        }

    return(
        <div className="si">
             <h1>
              <u>
                Welcome To KempeGowda Airport...
              </u>
             </h1>
            <tr>
                <td>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} ref={usernameref} required/>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} ref={passwordref} required/>
                </td>
            </tr>
            <br/>
            <tr className="q">
                <td>
                    <button type="submit">Submit</button>
                </td>
                
                <td>
                    <button type="submit" onClick={handleSumbit}>Create Account</button>
                </td>
            </tr>
      
                <br/>
                <iframe width="914" height="514" src="https://www.youtube.com/embed/m8n2o3Qx504" title="Dubai Airport Baggage Handling Inner Workings in 4k -  Dubai Flow Motion: Extended" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    </div>
    );
}