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
import { getAllLadang } from "../../../Service/pengelolaan/ladang"
import id from "date-fns/esm/locale/id/index.js"
import { getLocalValue } from "../../../features/auth/dataStorage"
import { convertLadangFormat } from "../../../utils/ladang/convertLadangFormat"




export default function PengelolaanMain(){

    const [ladangList, setLadangList] = useState([])
    const [activeLadang, setActiveLadang] = useState({});
    const [onTransition, setOnTransition] = useState(false);
    const [activeForm, setActiveForm] = useState({active: false, form: ""});
    const [onDelete, setOnDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{
        console.log("ladang list seharusnya berubah");
        let idUser = getLocalValue("user_id");
        async function setLadangFromFetch(){
            let result = await getAllLadang(idUser);
            if(result.success){
                setLadangList(result.data.map((arr) => convertLadangFormat(arr)));
                setActiveLadang(ladangList[0]);
                setIsLoading(false)
            }else{

            }
            console.log(result.data.map((arr) => convertLadangFormat(arr)));
            console.log("ladang list =====>",ladangList);
        }
        setLadangFromFetch()
    },[ladangList])

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
        let bufferArr = [...ladangList]
        bufferArr.splice(indexarr,1)
        if(bufferArr.length !== 0 ){
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

    
    if(isLoading ) return <Loader />
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