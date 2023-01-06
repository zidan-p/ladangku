import { useEffect, useState } from "react"
import TabList from "./TabList"

let listTab = [
    {name: "ladang 1"},
    {name: "ladang 2"},
    {name: "ladang 3"},
    {name: "ladang 4"},
]

function showEmptyField(){}

export default function TabLadang(){

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(()=>{
        if (listTab.length === 0) showEmptyField();
        setActiveTabIndex(0);
    },[])

    const handleChangeIndex = (indexTarget) => {
        setActiveTabIndex(indexTarget);
    }

    return (
        <div className="px-12 mb-5 mt-2">
            <div className="flex justify-between border-b  border-b-gray-300 ">
                <ul className="flex text-sm font-semibold">
                    {listTab.map((tab,i) => {
                        return (
                            <TabList 
                                key={i} 
                                index={i}
                                onChangeIndex={handleChangeIndex}
                                activeIndex={activeTabIndex} >
                                {tab.name}
                            </TabList>
                        )
                    })}
                </ul>
                <button 
                    className="
                        inline-flex items-center gap-2 transition-all border-b-2 border-b-transparent hover:border-b-yellow-500
                        active:text-gray-700 active:border-b-yellow-400"
                    >
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <line x1={12} y1={8} x2={12} y2={16} />
                        <line x1={8} y1={12} x2={16} y2={12} />
                    </svg>
                    <span className="text-sm font-normal"> Tambah Ladang</span>
                </button>
            </div>
        </div>
    )
}