import React from "react";

const TodoList = (props) =>{
    return (<>
    <div className="todo_style">
    <span onClick={()=>{
        props.onSelect(props.id)
    }} 
    className="fa-times">
    ✖
    </span>
    <li> {props.text} </li>
    </div>
</>)
    
}

export default TodoList;