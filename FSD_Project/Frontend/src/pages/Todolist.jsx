import React,{useState,useEffect} from 'react'

import axios from 'axios'
import "./Todolist.css"

function Details() {
    
    const [task,setTask]=React.useState("")
    const [alltask,setAlltask]=React.useState([])
    

    

    const onSubmit= async()=>{
        console.log("HI");
        const res=await axios.post("http://localhost:5000/addtask",{task});
        console.log(res.task);


    }
    useEffect(()=>{

        const get= async ()=>{
        console.log("HI");
        const res= await axios.get("http://localhost:5000/getalltask");
        console.log(res.data);
        setAlltask(res.data);

        }
        get();
    },[])

    const onDelete= async(t)=>{
        const res=await axios.delete(`http://localhost:5000/delete/${t}`);

    }
    
    

    return (
        <div>
            <div className="container">
            <h1>TO DO LIST</h1>
            {alltask.map((task)=>{
                return(
                <div key={task.id} className='content'>
                    <p>{task.task}</p>
                    <button onClick={()=>onDelete(task.id)}>
                        delete
                    </button>
                    

                </div>
                );

            })}
            <input value={task} onChange={e=>setTask(e.target.value)}/>


            <button  onClick={onSubmit}>
                ADD
            </button>
            
            </div>
        

        </div>
    )
}

export default Details