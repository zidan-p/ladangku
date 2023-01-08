


export default function JenisTumbuhan(props){

    return (
        <div className="head flex justify-between mb-4">
            <h3 className="text-green-800 font-semibold bg-green-200 px-2 rounded">{props.tumbuhan}</h3>
            <div className="transition-all flex gap-4">
                <button 
                className="transition-all text-red-600 hover:bg-red-200 rounded px-2"
                    >
                    Delete
                </button>

                <button
                onClick={() => props.onShowUpdateLadang()}
                className="transition-all text-yellow-600 hover:bg-yellow-200 rounded px-2"
                    >
                    Edit
                </button>
            </div>
        </div>
    )
}