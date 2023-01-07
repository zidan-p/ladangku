import { format, formatDuration } from "date-fns"


export default function ProfileLadang({profile}){



    return (
        <section className="w-full flex h-28 mb-6">
            <div className="basis-1/3 flex flex-col justify-center bg-green-300 transition-all">
                <h1 className="text-center text-lg font-bold text-green-800">{profile.luasLadang} m2</h1>
            </div>
            <div className="basis-2/3 bg-white flex p-2">
                <div className="basis-1/2 border-r px-3 py-2">
                    <table className="text-xs w-full h-full ">
                        <tbody >
                            <tr>
                                <td className="font-semibold">Luas Ladang</td>
                                <td className="text-gray-600 text-right">{profile.luasLadang} <span className="text-black font-semibold">m2</span></td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Umur Tanaman</td>
                                <td className="text-gray-600 text-right">
                                    {formatDuration(profile.umur, { format: ['months', 'weeks', 'days']})}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Kepadatan Tanaman</td>
                                <td className="text-gray-600 text-right">{Math.round(profile.kepadatan)} <span className="text-black font-semibold">tanaman/m2</span></td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Umur Siap Panen</td>
                                <td className="text-gray-600 text-right">
                                    {formatDuration(profile.umurPanen, { format: ['months', 'weeks', 'days']})}
                                </td>
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
                                <td className="text-gray-600 text-right">{format(profile.tanggalTanam,"d MMMM R")}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Banyak Tanaman</td>
                                <td className="text-gray-600 text-right">{profile.banyakTanaman}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Perkiraan Panen 
                                    <span className="text-[10px] text-red-800">*minimal</span> 
                                </td>
                                <td className="text-gray-600 text-right">{format(profile.tanggalPanen, "d MMMM R")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}