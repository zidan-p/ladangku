




export default function ProvinceList(props){

    return (
        <div 
        onClick={() => props.handleOnClick(props.idProvinsi)}
        className="flex group justify-between rounded-sm p-2 cursor-pointer bg-white hover:bg-gray-100 border border-green-700 active:bg-gray-200">
            {props.name}
            <svg className="group-hover:translate-x-2 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>        </div>
    )
}