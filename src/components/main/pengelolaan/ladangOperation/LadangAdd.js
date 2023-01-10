import { useEffect, useState } from "react"
import InformationField from "./InformationField"
import CreateTodoList from "./createTodoList/CreateTodoList"
import { getAllKomoditas } from "../../../../Service/pengelolaan/komoditas"


const arrayFruit = [
    {id: 1, name:"bawang"},
    {id: 2, name:"sayur"},
    {id: 3, name:"padi"},
    {id: 4, name:"mlinjo"},
]


export default function LadangAdd(props){

  const [formDataLadang, setFormDataLadang] = useState({
    namaLadang    : "",
    jenisTanaman  : "",
    luasLadang    : "",
    jumlahTanaman : "",
    durasiPanen   : "",
  })

  const [komoditas, setKomoditas] = useState([]);


  useEffect(()=>{
    async function getkomoditas(){
      let result = await getAllKomoditas()
      if(result.success){
        setKomoditas(result.data)
      }
    }
    getkomoditas()
  },[])

  useEffect(() => {
    //kirim ke ladang operation
    props.collectData("profileLadang", formDataLadang);
  },[formDataLadang])



  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormDataLadang((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }

  const handleChangeDuration = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
  }


  return(
    <div className="flex max-h-full h-full overflow-y-auto">
      <div className="flex border-r basis-2/3 border-gray-300" >
        <div className="bg-green-100 basis-1/2 shrink-0 rounded h-full p-5">
          <div className="flex flex-col h-5/6 justify-between ">
            <div className>
              <label className="block text-sm text-green-800 mb-2" htmlFor="field">Nama Ladang</label>
              <input onChange={handleChangeForm} value={formDataLadang.namaLadang} id="field" name="namaLadang" className="w-full rounded-sm p-2" type="text" />
            </div>
            <div>
              <label htmlFor="field1" className="block text-sm text-green-800 mb-2">Tanaman</label>
              <select onChange={handleChangeForm} name="jenisTanaman" className="w-full rounded-sm p-2 pr-4" >
                <option value="0">Silahkan dipilih</option>
                  {komoditas.map((frt,index) => {
                      return (<option value={frt.CommodityId} key={index} name={index}>{frt.name}</option>)
                  })}
              </select>
            </div>
            <div>
              <label htmlFor="field2" className="block text-sm text-green-800 mb-2">Luas Ladang (m2)</label>
              <input onChange={handleChangeForm} value={formDataLadang.luasLadang} name="luasLadang" type="number" id="field2" className="w-full rounded-sm p-2" />
            </div>
            <div>
              <label htmlFor="field3" className="block text-sm text-green-800 mb-2">Banyak Bibit</label>
              <input onChange={handleChangeForm} value={formDataLadang.jumlahTanaman} name="jumlahTanaman" type="text" id="field3" className="w-full rounded-sm p-2" />
            </div>
            <div>
              <label htmlFor="field4" className="block text-sm text-green-800 mb-2">Durasi Hingga Panen (bulan)</label>
              <input onChange={handleChangeForm} value={formDataLadang.durasiPanen} name="durasiPanen" type="text" id="field4" className="w-full rounded-sm p-2" />
            </div>
          </div>
        </div>
        <InformationField />
      </div>

      {/* add todo list */}
      <CreateTodoList collectData={props.collectData} />
    </div>
  )
}