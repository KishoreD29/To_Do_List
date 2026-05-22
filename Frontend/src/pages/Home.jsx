import react,{useState} from "react"
import axios from "axios"
import './Home.css'

function Home(){
    const[name,setName]=useState("");
    const onSubmit= async()=>{
        console.log("hi");
        const res= await axios.post("http://localhost:5000/user",{name});


    }

    return(
        <div>
            <div>HI </div>
            <label>Name :</label>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onSubmit}>
                submit
            </button>
            
        </div>
    )

}
export default Home;
