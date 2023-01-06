import { useEffect, useState } from "react"


export default function Sidelist(props){
    let isActive = false; 

    const checkActive = () => {
        if(props.currentActiveParent == props.name || props.isActive === true) isActive = true;
    }
    checkActive();
    const handleOnClick = () => {
        props.onActiveChange(props.name);
    }
    return(
        <li 
            onClick={handleOnClick}
            className={`
            py-1.5 cursor-pointer 
            ${isActive? "from-green-600" : ""} 
            bg-gradient-to-l
            hover:from-green-300
            transition-all
            active:from-green-400
            `}>
            {props.children}
        </li>
    )
}