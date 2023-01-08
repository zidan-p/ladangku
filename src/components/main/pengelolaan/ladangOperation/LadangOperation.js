import { useState } from "react"
import LadangAdd from "./LadangAdd";
import LadangUpdate from "./LadangUpdate";
import ButonForm from "../../../form/ButtonForm";


const arrayFruit = [
    {id: 1, name:"bawang"},
    {id: 1, name:"sayur"},
    {id: 1, name:"padi"},
    {id: 1, name:"mlinjo"},
]


export default function LadangOperation(props){

  const [formDataLadang, setFormDataLadang] = useState({

  })
  const handleCloseForm = () => {
    props.onClose()
    setFormDataLadang({})
  };

  let content
  let caseBtn
  switch(props.form.form){
    case "add-ladang":
      content = <LadangAdd />
      caseBtn = "add"
      break
    case "update-ladang":
      content = <LadangUpdate />
      caseBtn= "update"
      break
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
            <h3 className="text-xl font-semibold">Tambah Ladang</h3>
          </button>
          <ButonForm caseBtn={caseBtn}> {caseBtn} </ButonForm>
        </div>
        {content}
      </div>
    </>
  )
}