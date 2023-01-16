
import { ReactComponent as IndonesianMap } from "./map/indonesian.svg";
import { generateGoodsPrice } from "../../../utils/pricesGoods";
import { useState, useEffect } from "react";
import ProvinceList from "./prices/ProvinceList";
import ProvincePrice from "./prices/ProvincePrice";







export default function Monitor(){
    const [hargaDagang,setHargaDagang] = useState(generateGoodsPrice()); 
    const [activeRegion, setActiveRegion] = useState(null)

    useEffect(()=>{

    },[activeRegion])


    const handleChangeActive = (id) => {
        setActiveRegion(hargaDagang[id]);
        console.log(id,hargaDagang[id])
        // console.log(id,activeRegion)
    }

    return (
        <div className=" h-full flex flex-col overflow-y-auto">
            <div className="px-12 h-2/5 ">
                <div className=" overflow-auto h-full">
                    {/* <IndonesianMap className="w-full" /> */}
                    {/* <img src={IndonesianMap} /> */}
                    <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Indonesia_provinces_blank_map.svg" />
                </div>
            </div>

            {/* //section untuk harga */}
            <div className="px-12 my-7 flex h-full overflow-y-auto border-l-4 border-l-green-600 border-y py-2">
                <div className="basis-2/3 pr-5 overflow-y-auto">
                    <h4 className="mb-2 font-semibold text-lg">Daftar Provinsi</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {hargaDagang.map((dagangan,i) => {
                            return <ProvinceList handleOnClick={handleChangeActive} name={dagangan.name} idProvinsi={i} key={i}/>
                        })}
                    </div>

                </div>
                <div className="basis-1/3 pl-5 border-l border-gray-400">
                    { activeRegion === null
                    ? <h1 className="text-center font-semibold">Belum memilih daerah</h1>
                    : <ProvincePrice activeProvince={activeRegion} />
                    }
                </div>
            </div>
        </div>
    )
}