import React,{useState} from 'react'
import axios from 'axios'
import "./Form.css"
import {useNavigate} from 'react-router-dom'
function Form() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[role,setRole]=useState("Student");
    const navigate=useNavigate();
    const onSubmit=async()=>{
        console.log("HI");
        const res=await axios.post("http://localhost:5000/login",{name,email,role});
        navigate("/details");


    }
  return (
    <div className='container'>
        <div className='item'>
        <label> Name</label>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <label> Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)}/>
        <label> Role</label>
        <select onChange={e=>setRole(e.target.value)}>
            <option value={"Student"}>
                Student
            </option>
            <option value={"Teacher"}>
                Teacher
            </option>
        </select>
        <button onClick={onSubmit}> Submit</button>
        </div>







    </div>

  )
}

export default Form