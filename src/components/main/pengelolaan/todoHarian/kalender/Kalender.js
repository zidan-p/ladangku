import { useState } from "react";
import DateList from "./DateList";
import { add, sub, setDate, isSunday } from 'date-fns'

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

const DAY_IN_MILIS = 24 * 60 * 60 * 1000;





export default function Kalender(){

    const [activeDate, setActiveDate] = useState(new Date((new Date()).setHours(0, 0, 0, 0)))

    const hanldeOnChangeActive = (date) => {
        console.log("hari aktif telah diubah");
        setActiveDate(date)
    };

    const setMonth = (direction = "") => {
        switch(direction){
            case "next":
                setActiveDate(add(activeDate, {months: 1}));
                break;
            case "prev":
                setActiveDate(sub(activeDate, {months: 1}));
                break;
        }
    }

    const calculateDays = (date = new Date()) =>{ // date adalah tanggal dari ini diasumsikan

        
        let thisDate = date;
        if(date === null || date === "" || date === 0){
            thisDate = new Date();
        }
        let dateCount = new Date(thisDate.getFullYear(), thisDate.getMonth(), 0); //jumlah hari bulan target
        let dateCollection = []

        console.log("hasil date count"+dateCount.toString());

        //seimbangakn dengan hari dalam seminggu
        // if(!isSunday(dateCount)){
        //     for(let i = 0; i < dateCount.getDay(); i++){
        //         dateCollection.push(
        //             <div></div>
        //         )
        //     }
        // }
        
        //masukan tanggal
        for(let i = 0; i < dateCount; i++){
            dateCollection.push(
                <DateList 
                key={i} 
                date={new Date(
                    thisDate.getFullYear(), 
                    thisDate.getMonth(), 
                    (i+1)
                )} 
                activeDate={activeDate}
                onChangeActive={hanldeOnChangeActive}
                    >
                    {i+1}
                </DateList>
            )
        }
        return dateCollection;
    }

    return(
        <div className="w-full bg-white min-h-[11rem] pb-2">
            <div className="flex justify-between p-3 px-4">
                <h3 className="text-base font-bold">{activeDate.getFullYear()} {Months[activeDate.getMonth()]}</h3>
                <div className="inline-flex">
                <button onClick={()=>setMonth("prev")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                    <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button onClick={()=>setMonth("next")}>
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                </div>
            </div>
            <ul className="grid grid-cols-7 border-y border-gray-300 justify-items-center py-2 text-xs font-extralight">
                <li>Minngu</li>
                <li>Senin</li>
                <li>Selasa</li>
                <li>Rabu</li>
                <li>Kamis</li>
                <li>Jum'at</li>
                <li>Sabtu</li>
            </ul>
            <div id="fill-date" className="grid grid-cols-7">
                {calculateDays(activeDate)}
            </div>
        </div>
    )
}