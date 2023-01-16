import { useState, useEffect } from "react";
import { getAllLadang } from "../../../Service/pengelolaan/ladang";
import { convertBackendToFrontendLadangFormat } from "../../../utils/ladang/convertLadangFormat";
import { getLocalValue } from "../../../features/auth/dataStorage";
import KeuanganCard from "./KeuanganCard";
import { LadangExpectationList } from "./LadangExpectationList";
import Loader from "./../pengelolaan/loader/Loader";


export default function Keuangan(){

    const [ladang,setLadang] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{
        console.log("ladang list seharusnya berubah");
        let idUser = getLocalValue("user_id");
        async function setLadangFromFetch(){
            let result = await getAllLadang(idUser);
            let formatedResult = result.data.map((arr) => convertBackendToFrontendLadangFormat(arr))
            if(result.success){
                setLadang(formatedResult);
                setIsLoading(false)
            }else{

            }
            console.log(ladang)
        }
        setLadangFromFetch()
    },[])

    function getNameAndPrediction(ladang){
        return{
            name : ladang.profile.name,
            komoditas : ladang.profile.jenisKomoditas,
            banyakTanaman : ladang.profile.banyakTanaman,
            total: parseInt(ladang.profile.banyakTanaman) * 10000 //asumsi perbuah 10000
        }
    }

    if(isLoading){
        return <Loader />
    }

    return (
        <div className="bg-gray-100 w-full h-full">
            <div className="h-full p-24">
                <div class="">
                    <h1 className="bg-gray-50 text-3xl font-semibold px-6 border-b text-gray-700 py-3">Daftar Expektasi Hasil Tiap - Tiap Ladang</h1>
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nama Ladang
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Komoditas
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Jumlah Tanam
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Expektasi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {ladang.map((lad, i) => {
                            return (
                                <LadangExpectationList key={i}  data={getNameAndPrediction(lad)} />
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}