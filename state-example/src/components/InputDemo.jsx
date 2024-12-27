import { useState } from "react";

function InputDemo() {
    const [input,setInput]=useState('');
    const handleChange=(e)=>{
        const value= e.target.value;
        setInput(value);
    }
    return ( 
        <>
            <h2>Welcome {input}</h2>
            <input 
                type="text" 
                placeholder="Enter your Name" 
                onChange={handleChange} />
        </>
     );
}

export default InputDemo;