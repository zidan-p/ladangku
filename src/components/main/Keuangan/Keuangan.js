import { useState, useEffect } from "react";
import { getAllLadang } from "../../../Service/pengelolaan/ladang";
import { convertBackendToFrontendLadangFormat } from "../../../utils/ladang/convertLadangFormat";
import { getLocalValue } from "../../../features/auth/dataStorage";
import KeuanganCard from "./KeuanganCard";


export default function Keuangan(){

    const [ladang,setLadang] = useState([])

    useEffect( ()=>{
        console.log("ladang list seharusnya berubah");
        let idUser = getLocalValue("user_id");
        async function setLadangFromFetch(){
            let result = await getAllLadang(idUser);
            let formatedResult = result.data.map((arr) => convertBackendToFrontendLadangFormat(arr))
            if(result.success){
                setLadang(formatedResult);
            }else{

            }
            console.log(ladang)
        }
        setLadangFromFetch()
    },[])

    function getNameAndPrediction(ladang){
        return{
            name : ladang.profile.name,
            banyakTanaman : ladang.profile.banyakTanaman,
            total: parseInt(ladang.profile.banyakTanaman) * 10000 //asumsi perbuah 10000
        }
    }

    return (
        <div className="px-12 py-6 gap-5 flex flex-wrap justify-between">
            {ladang.map((lad, i) => {
                return (
                    <KeuanganCard key={i}  data={getNameAndPrediction(lad)} />
                )
            })}
        </div>
    )
}