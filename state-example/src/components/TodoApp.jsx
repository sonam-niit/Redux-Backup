import { useState } from "react";

function TodoApp() {
    const [list,setList]=useState([]);//default state to blank
    const [input,setInput]=useState('');
    const saveData=()=>{
        setList(prev=>[...prev,input]);//update array state
        setInput('');//update Input state
    }
    return ( 
        <div>
            <h1>Todo App</h1><hr/>
            <input type="text" placeholder="Enter your Todo" 
            onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={saveData}>Save Todo</button>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
     );
}

export default TodoApp;