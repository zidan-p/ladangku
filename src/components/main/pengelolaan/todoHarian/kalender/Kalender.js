import { useState } from "react";
import DateList from "./DateList";
import { addMonths, subMonths, isEqual} from 'date-fns'
import { generateDate } from "../../../../../utils/calendar/calendar";

const Months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "Novermber",
    "Desember"
]





export default function Kalender(props){

    const currentdate = new Date();
    const [activeDate, setActiveDate] = useState(currentdate); 

    const handleSelected = (date) => {
        props.onChangeSelectedDate(date)
    }

    return(
        <div className="w-full bg-white min-h-[11rem] pb-2">
            <div className="flex justify-between p-3 px-4">
                <h3 className="text-base font-bold">{Months[activeDate.getMonth()]} {activeDate.getFullYear()}</h3>
                <div className="inline-flex">
                <button 
                    className="active:bg-gray-200 rounded"
                    onClick={()=> setActiveDate(subMonths(activeDate, 1))}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                    <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button 
                    className="active:bg-gray-200 rounded"
                    onClick={() => setActiveDate(addMonths(activeDate, 1))}
                    >
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                </div>
            </div>
            <ul className="grid grid-cols-7 border-y border-gray-300 justify-items-center py-2 px-5 text-xs font-extralight">
                <li>Minngu</li>
                <li>Senin</li>
                <li>Selasa</li>
                <li>Rabu</li>
                <li>Kamis</li>
                <li>Jum'at</li>
                <li>Sabtu</li>
            </ul>
            <div id="fill-date" className="grid grid-cols-7 p-5">
                {generateDate(activeDate.getMonth(), activeDate.getFullYear())
                .map((prps, index)=>{return (
                    <DateList 
                        key={index} 
                        data={prps} 
                        selected={
                            isEqual(props.selectedDate, prps.date)
                        }
                        onSelect={handleSelected} 
                        />
                )})}
            </div>
        </div>
    )
}