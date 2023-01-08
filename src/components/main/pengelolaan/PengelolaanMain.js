import Header from "../../header/Header"
import TabLadang from "./tabLadang/TabLadang"
import ProfileLadang from "./profileLadang/Profileladang"
import JenisTumbuhan from "./jenisTumbuhan/JenisTumbuhan"
import TimeLine from "./timeLine/TimeLine"
import TodoHarian from "./todoHarian/todoHarian"
import { formatISODuration } from "date-fns"
import { useEffect, useState } from "react"
import { generateProfileData } from "../../../utils/profileLadang/profileLadang"
import { calculatePercent } from "../../../utils/timeLine"
import Loader from "./loader/Loader"
import LoaderLadang from "./loader/LoaderLadang"
import Emptyladang from "./emptyLadang/emptyLadang"
import LadangOperation from "./ladangOperation/LadangOperation"

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
    const [activeForm, setActiveForm] = useState(false);

    useEffect(()=> {
        if(ladangList.length !== 0){
            setActiveLadang(ladangList[0])
        }
    },[])

    const handleChangeLadang = (indexLadang) => {
        setOnTransition(true);
        setTimeout(()=>{
            setActiveLadang(ladangList[indexLadang]);
            setOnTransition(false)
        },350)
    }
    const handleShowAddLadang = () => setActiveForm(true)
    const handleHideAddladang = () => setActiveForm(false)




    if(activeLadang === null || activeLadang === undefined){
        return <Loader/>
    }

    let ladangContent = (
        <div className={`transition-all relative ${onTransition? "-translate-x-24 opacity-0":""}`}>
            <ProfileLadang profile={generateProfileData(activeLadang.profile)} />
            <section className="p-4 px-12">
                <JenisTumbuhan tumbuhan={activeLadang.profile.jenisKomoditas} />
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
    
    return(
        <>
        <main className="bg-green-50 h-full w-full overflow-y-auto overflow-x-hidden">
            <Header> Rutinitas penumbuhan ladang </Header>

            <TabLadang 
                ladangList={
                    ladangList.map((ladang)=>{
                        return {id : ladang.id, name: ladang.profile.name}
                    })
                }
                onChangeLadang={handleChangeLadang}
                onShowAddLadang={handleShowAddLadang}
            />


            {ladangList.length === 0 
                ? <Emptyladang />
                : ladangContent
            }

        </main>
        <LadangOperation active={activeForm} onClose={handleHideAddladang} />
        </>
    )
}