


export default function Todo(){

    return (
        <div className="w-full bg-white min-h-[8rem] ">
            <div className="flex items-center justify-between p-4 py-3 border-b border-b-gray-300">
                <h3 className="font-bold ">Todo List Harian </h3>
                <h5 className="font-thin text-gray-700">12 Maret 2022</h5>
            </div>
            <ul className="px-4 py-2">
                <li className="flex gap-3 select-none mb-2 hover:bg-green-100 rounded px-1">
                    <input type="checkbox" name="check-1" id="check-1" />
                    <label className="grow" for="check-1">Melakukan Penyiraman rutin</label>
                </li>
                <li className="flex gap-3 select-none mb-2 hover:bg-green-100 rounded px-1">
                    <input type="checkbox" name="check-2" id="check-2" />
                    <label className="grow" for="check-2">Melakukan Penyiraman rutin</label>
                </li>
            </ul>
        </div>
    )
}