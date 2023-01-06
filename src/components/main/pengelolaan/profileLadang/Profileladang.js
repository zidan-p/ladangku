


export default function ProfileLadang(){
    return (
        <section className="w-full flex h-28 mb-6">
            <div className="basis-1/3 flex flex-col justify-center bg-green-300 transition-all">
                <h1 className="text-center text-lg font-bold text-green-800">12.000 m2</h1>
            </div>
            <div className="basis-2/3 bg-white flex ">
                <div className="basis-1/2 border-r px-3 py-2">
                    <table className="text-xs w-full h-full ">
                        <tbody >
                            <tr>
                                <td className="font-semibold">Luas Ladang</td>
                                <td className="text-gray-600 text-right">12.000 <span className="text-black font-semibold">m2</span></td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Umur Tanaman</td>
                                <td className="text-gray-600 text-right">
                                    2 
                                    <span className="text-black font-semibold">bulan</span> 
                                    12 
                                    <span className="text-black font-semibold">hari</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Kepadatan Tanaman</td>
                                <td className="text-gray-600 text-right">10 <span className="text-black font-semibold">tanaman/m2</span></td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Umur Siap Panen</td>
                                <td className="text-gray-600 text-right">3 <span className="text-black font-semibold">bulan</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="basis-1/2 px-3 py-2">
                    <table className="text-xs w-full h-full">
                        <tbody >
                            <tr className="text-white">
                                <td className="font-semibold">#####</td>
                                <td className=" text-right">#####</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Tanggal Tanam</td>
                                <td className="text-gray-600 text-right">15 maret 2022</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Banyak Tanaman</td>
                                <td className="text-gray-600 text-right">30000</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Perkiraan Panen 
                                    <span className="text-[10px] text-red-800">*minimal</span> 
                                </td>
                                <td className="text-gray-600 text-right">16 juni 2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}