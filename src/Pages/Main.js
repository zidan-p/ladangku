import { useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import PengelolaanMain from "../components/main/pengelolaan/PengelolaanMain";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";


export default function Main(){

    useEffect(() => {
        let idUser = JSON.parse(localStorage.getItem("userProfile"));

        if(idUser === undefined || idUser === null) redirect("/login")

        
    }, [])

    let title = "";
    switch(window.location.pathname){
        case "/app":
            title = "Pengelolaan Ladang"
            break;
        case "/app/monitor":
            title = "Monitor Komoditas"
            break
    }

    return(


        <div className="flex h-screen max-h-screen overflow-auto">
            <div className="basis-1/6 shrink-0">
                <Sidebar />
            </div>
            <div className="grow h-full flex flex-col overflow-x-auto overflow-y-hidden">
                <Header>
                    {title}
                </Header>
                <PengelolaanMain />
            </div>
        </div>
    )
}

