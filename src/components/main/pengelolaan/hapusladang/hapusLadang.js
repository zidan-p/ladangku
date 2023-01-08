


export default function Hapusladang(props){

    return (
        <div className="h-4/5 flex flex-col justify-center">
            <h1 className=" mb-5 text-center text-red-600 text-lg font-bold">Apakah anda ingin menghapus Ladang ini ?</h1>
            <div className="flex justify-center gap-3">
                <button 
                onClick={()=>props.onCancel()}
                className="py-1 px-4 bg-green-400 hover:bg-green-300 active:bg-green-500 rounded font-semibold"
                >
                    Batal
                </button>
                <button 
                onClick={()=>props.onDeleteLadang(props.idLadang)}
                className="py-1 px-4 bg-red-400 hover:bg-red-300 active:bg-red-500 rounded font-semibold"
                >
                    Iya
                </button>
            </div>
        </div>
    )
}