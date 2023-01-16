import { useState } from "react"
import LadangAdd from "./LadangAdd";
import LadangUpdate from "./LadangUpdate";
import ButonForm from "../../../form/ButtonForm";
import LoaderLadang from "../loader/LoaderLadang";
import { addLadang } from "../../../../Service/pengelolaan/ladang";
import { getLocalValue } from "../../../../features/auth/dataStorage";


const arrayFruit = [
    {id: 1, name:"bawang"},
    {id: 1, name:"sayur"},
    {id: 1, name:"padi"},
    {id: 1, name:"mlinjo"},
]


export default function LadangOperation(props){

  const [currentData, setCurrentData] = useState({});
  const [isLoading, setLoading] = useState(false);


  const handleCloseForm = () => {
    setTimeout(()=>{
      props.onClose()
      setCurrentData({})
      setLoading(false);
    }, 1000);
    setLoading(true)
  };

  let handleSend;

  const inLoadingSend = async () => {
    let userId = getLocalValue("user_id");
    await handleSend(userId,currentData,props.ladangLength);
    setCurrentData({});
    props.onClose();
    setLoading(false);
  }

  const handleInLoadingSendEvent = () => {
    setLoading(true);
  }

  const sendData = () => {
    inLoadingSend()
    handleInLoadingSendEvent();
  }

  const collectData = (key,data) => {
    setCurrentData(prevProps => ({
      ...prevProps,
      [key] : data
    }))
  }

  let content
  let caseBtn
  let title
  switch(props.form.form){
    case "add-ladang":
      content = <LadangAdd collectData = {collectData}  />
      caseBtn = "add"
      title   = "Tambah Ladang"
      handleSend = addLadang
      break
    case "update-ladang":
      content = <LadangUpdate collectData = {collectData} />
      caseBtn = "update"
      title   = "Edit ladang"
      break

    //disini tempat state direset
    default:
      content = ""
      caseBtn = ""
  }





  return(
    <>
      <div className={`transition inset-0 bg-gray-900 ${props.form.active ? "opacity-70 z-10" : "-z-10 opacity-0"}   absolute `}  ></div>
      <div className={`z-20 transition ${props.form.active ? "delay-500" : "w-3/5"} bg-white ${props.form.form === "update-ladang" ? "w-3/5" : "w-4/5" }  flex flex-col gap-7 h-screen p-4 px-5 absolute top-0 right-0 ${props.form.active ? "" : "translate-x-full"} `}>
        <div className="flex justify-between head">
          <button onClick={handleCloseForm} className="inline-flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <h3 className="text-xl font-semibold">{title}</h3>
          </button>
          <ButonForm onClick={sendData} caseBtn={caseBtn}> {caseBtn} </ButonForm>
        </div>
        {isLoading ? <LoaderLadang /> : content}
      </div>
    </>
  )
}