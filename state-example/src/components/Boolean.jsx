import { useState } from "react";

function Boolean() {
    const [flag,setFlag]=useState(false);
    const handleClick=()=>{
        setFlag(prev=>!prev)
    }
    return ( 
        <div>
            <h1>Conditional Rendering</h1>
            <h2>{flag?'Welcome User':'Please Login'}</h2>
            <button onClick={handleClick}>{flag?'logout':'Login'}</button>
        </div>
     );
}

export default Boolean;