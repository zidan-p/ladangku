import { useEffect, useState } from "react"
import Sidelist from "./SideList"


export default function Sidebar(){

    const [currentActive, setCurrentActive] = useState("");

    useEffect(() => {
        setCurrentActive("pengelolaan")
    },[])

    const handleOnActiveChange = (active) => {
        setCurrentActive(active);
    }

    return (
        <aside className="bg-green-200 pl-4 py-3 h-full select-none">
            <h2 className="text-lg font-semibold py-2 border-b-[0.5px] border-b-gray-200 mb-2">Ladangku</h2>
            <ul className="flex flex-col">
                <Sidelist onActiveChange={handleOnActiveChange} name={"monitor"} currentActiveParent={currentActive} > Monitor</Sidelist> 
                <Sidelist onActiveChange={handleOnActiveChange} name={"pengelolaan"} currentActiveParent={currentActive} > Pengelolaan</Sidelist>
                <Sidelist onActiveChange={handleOnActiveChange} name={"keuangan"} currentActiveParent={currentActive}> Keuangan</Sidelist>
            </ul>
        </aside>
    )
}
