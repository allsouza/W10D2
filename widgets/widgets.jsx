import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock"
import Tabs from "./frontend/tabs"

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    const tabs = [
        { title: "Gio", content: "gios content" }, 
        { title: "Andre", content: "andres content" }, 
        { title: "Dogo", content: <img src="https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif"/> },
        { title: "Cat", content: <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" />}
    ];
    const elements = <>
        <Clock />
        <Tabs tabs={tabs}/>
    </>
    ReactDOM.render(elements, root);
})