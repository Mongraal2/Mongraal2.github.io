import React from "react";

const Item=(props)=> {
    let remove=()=>{
        props.setItems(props.items.filter((item,idx)=>{return idx!==props.index}));
    };
    return(
        <div className="list-item">
            <button className="del-btn btn" onClick={remove}>x</button>
            <span className="item">{props.item}</span>
        <br/>
        </div>
    )
}
export default Item;