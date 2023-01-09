import { useEffect } from "react";
import Header from "../components/header/Header";
import PengelolaanMain from "../components/main/pengelolaan/PengelolaanMain";


export default function Main(){

    useEffect(() => {
        let idUser = JSON.parse(localStorage.getItem("userProfile"));

        if(idUser === undefined || idUser === null)window.location = "/login"
    }, [])

    return(
        <div className="flex h-screen max-h-screen overflow-auto">
            <div className="basis-1/6 shrink-0">
                <Sidebar />
            </div>
            <div className="grow h-full overflow-x-auto overflow-y-hidden">
                <PengelolaanMain />
            </div>
        </div>
    )
}