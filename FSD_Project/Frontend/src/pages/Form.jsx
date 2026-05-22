import {useState} from 'react'


function greet(name){
    alert(name);
}

function Form(){

    const[user,setUser]=useState('');
    const[age,setAge]=useState('');
    const[salary,setSalary]=useState('');
  
    return (
      <div>
        
      <input type='text' value={user} onChange={(e)=> setUser(e.target.value)}/>
      
      
      <input type='number' value={age} onChange={(e)=> setAge(e.target.value)}/>
      
      
      <input type='number' step='0.01' value={salary} onChange={(e)=> setSalary(e.target.value)}/>
      
      
      </div>
    );
}
export default Form;