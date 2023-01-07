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

    useEffect(()=> {
        if(ladangList.length !== 0){
            setActiveLadang(ladangList[0])
        }
        console.log("active ldang ===> ", activeLadang);
        console.log("efek sedang dilakuakn");
    },[])

    const handleChangeLadang = (indexLadang) => {
        setActiveLadang(ladangList[indexLadang]);
    }

    if(activeLadang === null || activeLadang === undefined){
        return (<p>Loading....</p>)
    }
    
    return(
        <main className="bg-green-50 h-full w-full overflow-auto">
            <Header  > Rutinitas penumbuhan ladang </Header>
            <TabLadang 
                ladangList={
                    ladangList.map((ladang)=>{
                        return {id : ladang.id, name: ladang.profile.name}
                    })
                } 
                onChangeLadang={handleChangeLadang}
            />

            {!(activeLadang === null || activeLadang === undefined) && 
                <ProfileLadang profile={generateProfileData(activeLadang.profile)} />
            }
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

        </main>
    )
}