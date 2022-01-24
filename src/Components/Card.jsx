import React from "react";
import '../Css/App.css'
export default function Card({imgLink,name,description,imdb}){
    return (
        <div className="box">
            <img src={imgLink} alt={name} className="thumbnail"/>
            <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
                <a href={imdb} className="imdb-link" target={'_blank'}>Go to IMDB</a>
            </div>
        </div>
    )
}