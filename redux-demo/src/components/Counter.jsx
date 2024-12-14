import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const count= useSelector(state=>state.count);//read the global
    const dispatch= useDispatch(); //to dispatch the action
    const handleClick=()=>{
        dispatch({type:'INCREMENT'})
    }
    return (
        <div>
            <h1>Conter Component: {count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            {/* Dispatch Decrement action */}
        </div>
      );
}

export default Counter;