


export default function TabList(props){

    return(
        <li 
            onClick={()=>props.onChangeIndex(parseInt(props.index))}
            className={`
                px-1 pb-3 mr-2 cursor-pointer
                hover:text-black transition
                ${props.activeIndex === props.index 
                    ? "border-b-2 border-b-green-400"
                    : "text-gray-500"
                }
                whitespace-nowrap
                `}>
            {props.children}
        </li>
    )
}