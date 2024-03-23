import React, { useState, useRef } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Register from '../Components/Register';
function StudentRegistration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        stuname: '',
        stuemail: '',
        password: ''
    });

    const stunameRef = useRef(null);
    const stuemailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSumbit = (a) => {
        a.preventDefault();
        console.log(formData);
        localStorage.setItem('student', formData)
        navigate("/success");
        
    };


    return (
        <div className='container'>
            <h1>Student Registration From</h1>
            <form onSubmit={handleSumbit}>
                <label htmlFor='stuname'>StudentName</label>
                <input type='text' id='stuname' name='stuname' value={formData.stuname} onChange={handleChange} ref={stunameRef} required />
                <label htmlFor='stuemail'>Studentemail</label>
                <input type='email' id='stuemail' name='stuemail' value={formData.stuemail} onChange={handleChange} ref={stuemailRef} required />
                <label htmlFor='password'>password</label>
                <input type='password' id='password' name='password' value={formData.passwordRef} onChange={handleChange} ref={passwordRef} required />
                <input type='submit' value="Register" />
            </form>
        </div>
    );
};
export default StudentRegistration;