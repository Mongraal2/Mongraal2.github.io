import React, {useState} from "react";
import TodoList from './TodoList';
import '../Css/App.css';
export default function App() {
    let [items, setItems]=useState(["Buy Apple"]);
    let [value,setValue]=useState('');
    let add=(e)=>{
        if(value.length!==0)
        {
            setItems([...items,value]);
            setValue('');
        }
    };
    let solve=(e)=>{
        setValue(e.target.value);
    }
    function solve2(e){
        if(e.keyCode===13)
        {
            solve(e);
            add(e);
        }
    };    
    return(
        <div className="main">
            <h1 style={{textAlign:'center'}}>ToDo List</h1>
            <div className="input">
                <div className="input_field">
                    <input id="input" placeholder=" " className="add-item" onChange={solve} value={value} onKeyUp={solve2}/>
                    <label for="input" className="input_label">Add Item</label>
                </div>
                <button className="add-btn btn" onClick={add} >+</button>
            </div>
            <br/>
            <TodoList items={items} setItems={setItems}/>
        </div>
    );
}
