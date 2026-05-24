import React,{useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Edit() {
  const[name,setName]=useState("")
  const location=useLocation();
  const em=location.state?.email;
  const onSubmit=()=>{
    console.log(em);
    const res=axios.put(`http://localhost:5000/edit/${em}`,{name});


  }

  return (
    <div>Edit
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={onSubmit}>
            Save
        </button>

    </div>
    
  )
}

export default Edit