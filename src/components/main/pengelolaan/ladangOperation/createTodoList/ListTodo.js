import { useState } from "react";



export default function ListTodo(props){

    const [animate, setAnimate] = useState(false)

    function handleDelete(){
        setTimeout(()=>{
            setAnimate(false)
            props.onDelete(props.index);
        }, 400);
        setAnimate(true);
    }

    return(
        <li className={`transition-all p-1.5 px-2 border-b  ${animate ? "opacity-0 translate-y-10" : "opacity-100"} relative text-sm border-gray-200 hover:bg-gray-100 flex justify-between`}>
          {props.content}
          <button 
          onClick={() => handleDelete()}
          className="hover:bg-red-300 rounded group"
          >
            <svg
              className="w-5 group-hover:stroke-red-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </li>
    )
}