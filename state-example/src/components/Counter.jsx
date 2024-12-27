import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleInc=()=>{
        setCount(prev=>prev+1);
    }
    const handleDec=()=>{
        if(count>0){
            setCount(prev=>prev-1);
        }else{
            alert('Counter cannot be negative')
        }
        
    }
    return (
        <>
            <h1>Counter Component: {count}</h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </>
    );
}

export default Counter;