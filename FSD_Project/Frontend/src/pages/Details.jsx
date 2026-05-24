import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Details.css'
import { useNavigate } from 'react-router-dom';
function Details() {
    const [details,setDetails]=useState([]);
    const navigate=useNavigate();

    const onDelete= async(email)=>{
        console.log( email);
        const res=await axios.delete(`http://localhost:5000/deletelogin/${email}`);
        console.log(res);

    }

    
    const onEdit=(e)=>{
        navigate("/edit",{state:{email:e}});

    }
    useEffect(()=>{

        const get= async()=>{
            const res= await axios.get("http://localhost:5000/details");
            setDetails(res.data);
            console.log(res.data);

        }
        get();
    },[]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {details.map((d)=>{
                    return (
                    <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>{d.email} 
                        </td>
                        <td>
                            <button onClick={()=>onEdit(d.email)}>Edit </button>
                            <button onClick={()=>onDelete(d.email)}> Delete</button>
                        </td>
                        
                    </tr>

                );
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default Details