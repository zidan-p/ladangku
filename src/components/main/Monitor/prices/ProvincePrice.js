import PriceList from "./PriceList"






export default function ProvincePrice({activeProvince}){


    return(
        <>
        <h5 className="font-semibold mb-4 text-center">{activeProvince.name}</h5>
        <ul className="flex flex-col">
            {activeProvince.dataComodity.map((data, i )=> {
                return <PriceList name={data.name} price={data.price} key={i} />
            })}
        </ul>
        </>
    )
}