import React from "react";
import Item from './Item';
export default function TodoList({items, setItems}) {
    return(
        <div className="list">
            {
                items.map((item,index)=>(<Item key={index} item={item} index={index} items={items} setItems={setItems}/>))
            }
        </div>
    );
}