




export default function ProvinceList(props){

    return (
        <div 
        onClick={() => props.handleOnClick(props.idProvinsi)}
        className=" rounded-sm p-2 cursor-pointer hover:bg-gray-100 border border-gray-400 active:bg-gray-200">
            {props.name}
        </div>
    )
}