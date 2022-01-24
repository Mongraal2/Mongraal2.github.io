import React from "react";
import Card from './Card';

export default function Cards({webSeries}){
    return(
        <main className="main-box">
            {webSeries.map(
                (card)=>(<Card {...card}/>)
            )}
        </main>
    );
};