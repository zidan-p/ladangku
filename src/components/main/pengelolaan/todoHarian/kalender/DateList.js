


export default function DateList(props){

    const checkActive = () => {
        console.log(
            props.date,
            props.activeDate
        )
        if(!props.date || !props.activeDate)return false

        if(props.date.getTime() == props.activeDate.getTime()){
            return true
        };
        return false;
    }

    return (
        <div 
            onClick={()=>{
                props.onChangeActive(props.date)
            }}
            className={`
                py-3 text-center transition-all 
                hover rounded hover:bg-green-100
                ${checkActive() ? "bg-green-200" : ""}
                active:bg-green-300 select-none
                cursor-pointer
            `}
            >
            {props.children}
        </div>
    )
}