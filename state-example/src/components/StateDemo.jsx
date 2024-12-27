import { useState } from "react";
function StateDemo() {
    //useState Return array where the first parameter is state name 
    //2nd parameter is its update function
    //in useState you can initial value
    const [name, setName] = useState('Skill Academy'); //initial value type is string

    const handleClick = () => {
        setName('Sonam Soni');
    }
    return (
        <>
            <h1>{name}</h1>
            <button onClick={handleClick}>Click To change Name</button>
        </>
    )
}

export default StateDemo;