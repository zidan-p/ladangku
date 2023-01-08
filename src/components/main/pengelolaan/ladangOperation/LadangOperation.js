import { useState } from "react"
import InformationField from "./InformationField"
import CreateTodoList from "./createTodoList/CreateTodoList"


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



  return(
    <>
      <div className={`transition inset-0 bg-gray-900 ${props.active ? "opacity-70 z-10" : "-z-10 opacity-0"}   absolute `}  ></div>
      <div className={`z-20 transition bg-white w-4/5 flex flex-col gap-7 h-screen p-4 px-5 absolute top-0 right-0 ${props.active ? "" : "translate-x-full"} `}>
        <div className="flex justify-between head">
          <button onClick={handleCloseForm} className="inline-flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <h3 className="text-xl font-semibold">Tambah Ladang</h3>
          </button>
          <button className="inline-flex items-center gap-2 px-8 py-2.5 rounded bg-green-800 text-sm font-light text-white">
            Tambah
            <svg className="stroke-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={12} cy={12} r={10} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
        <div className="flex max-h-full">
          <div className="flex border-r basis-2/3 border-gray-300" >
            <div className="bg-green-100 basis-1/2 shrink-0 rounded h-full p-5">
              <div className="flex flex-col h-5/6 justify-between ">
                <div className>
                  <label className="block text-sm text-green-800 mb-2" htmlFor="field">Nama Ladang</label>
                  <input id="field" className="w-full rounded-sm p-2" type="text" />
                </div>
                <div>
                  <label htmlFor="field1" className="block text-sm text-green-800 mb-2">Tanaman</label>
                  <select className="w-full rounded-sm p-2 pr-4" >
                      <option selected>Choose a country</option>
                      {arrayFruit.map((frt,index) => {
                          return (<option selecte name={index}>{frt.name}</option>)
                      })}
                  </select>
                </div>
                <div>
                  <label htmlFor="field2" className="block text-sm text-green-800 mb-2">Luas Ladang</label>
                  <input type="number" id="field2" className="w-full rounded-sm p-2" />
                </div>
                <div>
                  <label htmlFor="field3" className="block text-sm text-green-800 mb-2">Banyak Bibit</label>
                  <input type="text" id="field3" className="w-full rounded-sm p-2" />
                </div>
                <div>
                  <label htmlFor="field4" className="block text-sm text-green-800 mb-2">Varietas</label>
                  <input type="text" id="field4" className="w-full rounded-sm p-2" />
                </div>
              </div>
            </div>
            <InformationField />
          </div>

          {/* add todo list */}
          <CreateTodoList />
        </div>
      </div>
        
    </>
  )
}