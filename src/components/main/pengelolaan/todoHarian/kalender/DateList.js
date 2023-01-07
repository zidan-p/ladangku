import cn from "../../../../../utils/calendar/cn"


export default function DateList({data : {date, currentMonth, today}, selected, onSelect}){

    return (
        <h1
            onClick={()=>{
                onSelect(date)
            }}
            className={`
                py-3 text-center transition-all 
                hover rounded-sm hover:bg-green-100
                active:bg-green-300 select-none
                cursor-pointer box-border
                ${cn(
                    currentMonth ? "" : "text-gray-500",
                    today ? "border-2 border-gray-400" : "",
                    selected ?  "bg-green-200" : ""
                )}
            `}
                >
                {date.getDate()}
            </h1>
    )
}