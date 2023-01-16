import { useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import PengelolaanMain from "../components/main/pengelolaan/PengelolaanMain";
import { Outlet, redirect,useLocation, Route, Routes, useNavigate } from "react-router-dom";
import { checkLoged } from "../features/auth/checkLogin";


export default function Main(){

    const location = useLocation();

    useEffect(() => {
        
        let idUser = JSON.parse(localStorage.getItem("userProfile"));

        if(idUser === undefined || idUser === null) redirect("/login")

    }, [])

    checkLoged()

    let title = "";

    function checkHeader(){
        switch(location.pathname){
            case "/app/pengelolaan":
                title = "Pengelolaan Ladang"
                break;
            case "/app/keuangan":
                title = "Prediksi Keuangan"
                break
            case "/app/monitor":
                title = "Monitor Harga"
                break
            default :
                title = ""
        }
    }

    checkHeader()

    return(


        <div className="flex h-screen max-h-screen overflow-auto">
            <div className="basis-1/6 shrink-0">
                <Sidebar  />
            </div>
            <div className="grow h-full flex flex-col overflow-x-auto overflow-y-hidden">
                <Header>
                    {title}
                </Header>
                {/* <PengelolaanMain /> */}
                <Outlet />
            </div>
        </div>
    )
}

