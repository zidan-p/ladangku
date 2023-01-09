


export default function InputText(props){
    return(
        <div>
            <label htmlFor={props.name} className="block text-sm text-green-800 mb-2">{props.children}</label>
            <input 
                onChange={props.onchange} 
                name={props.name} 
                type={props.type ? props.type : "text"}
                id={props.name} 
                className="w-full border border-green-400 focus-within:outline-green-100 rounded-sm p-2" />
        </div>
    )
}