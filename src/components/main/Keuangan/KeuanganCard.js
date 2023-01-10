





export default function KeuanganCard({data}){

    return(
        <div className="card rounded border basis-1/6 flex flex-col">
            <h1 className="text-center text-lg font-semibold bg-green-600 text-white rounded py-2">{data.name}</h1>
            <div className="bg-white rounded-b p-4 font-semibold">
                {data.total} Rp
            </div>
        </div>
    )
}