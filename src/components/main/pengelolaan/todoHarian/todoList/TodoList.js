



export default function TodoList(props){


    return(
        <li className="flex gap-3 select-none mb-2 hover:bg-green-100 rounded px-1">
            <input type="checkbox"  id={`check-${props.id}`} />
            <label className="grow" for={`check-${props.id}`}>{props.name}</label>
        </li> 
    )
}