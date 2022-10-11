import React, { useState } from "react";
import TodoList from "./TodoList";

const App = ()=>{

   const [inputList,setInputList] = useState();
   const [Items, setItems] = useState([]);
    const itemEvent = (event)=>{
        setInputList(event.target.value); 
    }

    const listOfItems = ()=>{
        setItems( (oldItems)=>{
           return [...oldItems,inputList] ;
        })
        setInputList("");
    }

    const deleteItems = (id)=>{
        console.log("deleted")
        setItems ((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
    
    return(
        <>
            <div className="main_div" >
            <div className="center_div" >
                 <br />
                 <div className="heading" >
                 <h1>todo-List</h1>
                 </div>
                 <br />
                 <input type="text" placeholder="add a items" value={inputList}  onChange={itemEvent} />
                 <button onClick={listOfItems} >+</button>

                 <ol>
                    {/* <li>{inputList}</li> */}

                   { Items.map( (itemval,index)=>{
                   return <TodoList  
                   key={index} 
                   id={index}
                   text={itemval}
                   onSelect={deleteItems}
                    />

                    })
                   }
                 </ol>
            </div>
            </div>
        </>
    )
}
export default App;