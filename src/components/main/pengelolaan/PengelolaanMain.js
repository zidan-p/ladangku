import Header from "../../header/Header"
import TabLadang from "./tabLadang/TabLadang"
import ProfileLadang from "./profileLadang/Profileladang"
import JenisTumbuhan from "./jenisTumbuhan/JenisTumbuhan"
import TimeLine from "./timeLine/TimeLine"
import TodoHarian from "./todoHarian/todoHarian"
import { useEffect, useState } from "react"
import { generateProfileData } from "../../../utils/ladang/profileLadang"
import { calculatePercent } from "../../../utils/timeLine"
import Loader from "./loader/Loader"
import Emptyladang from "./emptyLadang/emptyLadang"
import LadangOperation from "./ladangOperation/LadangOperation"
import Hapusladang from "./hapusladang/hapusLadang"

const ladangList = [
    {
        id      : 1,
        profile : {
            name            : "ladang bawang",
            luasLadang      : 12000,
            tanggalTanam    : new Date(2022, 10, 12),
            banyakTanaman   : 30000,
            umurPanen       : {months: 3},
            jenisKomoditas  : "bawang merah"

        }        
    },
    {
        id      : 2,
        profile : {
            name            : "ladang sayur",
            luasLadang      : 13020,
            tanggalTanam    : new Date(2022, 10, 12),
            banyakTanaman   : 30000,
            umurPanen       : {months: 3},
            jenisKomoditas  : "cabai"
        }
    },
    {
        id      : 3,
        profile : {
            name            : "ladang sawah",
            luasLadang      : 6000,
            tanggalTanam    : new Date(2022, 10, 12),
            banyakTanaman   : 30000,
            umurPanen       : {months: 3},
            jenisKomoditas  : "padi"
        }
    },
]




export default function PengelolaanMain(){

    const [activeLadang, setActiveLadang] = useState(null);
    const [onTransition, setOnTransition] = useState(false);
    const [activeForm, setActiveForm] = useState({active: false, form: ""});
    const [onDelete, setOnDelete] = useState(false);

    useEffect(()=> {
        if(ladangList.length !== 0){
            setActiveLadang(ladangList[0])
        }
    },[])

    const handleChangeLadang = (indexLadang) => {
        setOnTransition(true);
        setTimeout(()=>{
            setActiveLadang(ladangList[indexLadang]);
            setOnTransition(false);
            setOnDelete(false)
        },350)
    }
    const handleShowAddLadang = () => setActiveForm({
        active  : true, 
        form    : "add-ladang"
    })
    const handleCloseForm = () =>{
        setActiveForm({
            active  : false, 
            form    : ""
        })
    }
    const handleShowUpdateLadang = () => setActiveForm({
        active  : true,
        form    : "update-ladang"
    })
    const handleShowDeleteLadang = () => {
        setOnTransition(true)
        setTimeout(()=>{
            setOnTransition(false)
            setOnDelete(true);
        },350);
    }

    const handleCancelDeleteLadang = () => {
        setOnDelete(false);
        setOnTransition(true);
        setTimeout(()=>{
            setOnTransition(false)
        },350);
    }

    const handleDeleteLadang = (id) => {
        let indexarr = ladangList.findIndex((arr, i) => arr.id === id);
        ladangList.splice(indexarr,1)
        if(ladangList.length !== 0 ){
            handleChangeLadang(0)
        }else{
            setActiveLadang(null)
        }

    }


    if((activeLadang === null || activeLadang === undefined ) && !Array.isArray(ladangList)){
        return <Loader/>
    }

    let ladangContent

    if(!(ladangList.length === 0) && activeLadang){
        ladangContent = (
            <div className={`transition-all relative ${onTransition? "-translate-x-24 opacity-0":""}`}>
                <ProfileLadang profile={generateProfileData(activeLadang.profile)} />
                <section className="p-4 px-12">
                    <JenisTumbuhan
                    idLadang = {activeLadang.id}
                    tumbuhan={activeLadang.profile.jenisKomoditas} 
                    onShowUpdateLadang={handleShowUpdateLadang} 
                    onShowDeleteLadang={handleShowDeleteLadang}
                    
                    />
                    <TimeLine 
                    percent={
                        calculatePercent(
                            activeLadang.profile.tanggalTanam,
                            new Date(),
                            activeLadang.profile.umurPanen
                        )
                    }
                    />
                </section>
                <TodoHarian idLadang={activeLadang} />
            </div>
        )
    } else{
        ladangContent = <Emptyladang />
    }


    if(onDelete) ladangContent = ""

    
    
    return(
        <>
        <main className="bg-green-50 h-full w-full  overflow-x-hidden">
            <TabLadang 
                ladangList={
                    ladangList.map((ladang)=>{
                        return {id : ladang.id, name: ladang.profile.name}
                    })
                }
                onChangeLadang={handleChangeLadang}
                onShowAddLadang={handleShowAddLadang}
            />


            {/* <Hapusladang /> */}
            {onDelete 
                ? <Hapusladang 
                    onCancel={handleCancelDeleteLadang} 
                    idLadang={activeLadang.id} 
                    onDeleteLadang={handleDeleteLadang}
                /> 
                : ""}
            
            {ladangContent}

        </main>
        <LadangOperation form={activeForm}  onClose={handleCloseForm} />
        </>
    )
}