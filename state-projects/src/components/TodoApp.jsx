import { useState } from "react";

function TodoApp() {
    const [list,setList]=useState([]);
    const [input,setInput]=useState('');
    const handleSave=()=>{
        setList(prev=>[...prev,{id:Date.now(),task:input,status:false}])
        //storing object into array
        setInput('')
    }
    const updateStatus=(id)=>{
        const updated= list.map(item=>{
            if(item.id===id){
                item.status=!item.status;
            }
            return item;
        })
        setList(updated);
    }
    const deleteTask=(id)=>{
        const filtered= list.filter(item=>item.id!==id);
        setList(filtered);
    }
    return ( 
        <div>
            <input type="text" placeholder="Enter Your Todo" value={input}
            onChange={(e)=>setInput(e.target.value)} className="form-control mt-3"/>
            <button onClick={handleSave} className="btn btn-primary mt-3">Save Todo</button>
            <h2>Todo List</h2>
            <ul className="list-group">
                {list.map(item=>(
                    <li className={`list-group-item 
                        ${item.status?'text-decoration-line-through':'text-decoration-none'}`}
                    key={item.id}>{item.task}
                    <button onClick={()=>updateStatus(item.id)} className="btn btn-success float-end ms-2">Update Status</button>
                    <button className="btn btn-danger float-end" onClick={()=>deleteTask(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default TodoApp;