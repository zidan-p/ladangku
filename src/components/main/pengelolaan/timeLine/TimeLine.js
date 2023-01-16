import { format } from "date-fns"


export default function TimeLine(props){

    return (
        <div>
            <h3 className="font-bold text-lg">Time Line</h3>
            <div 
                className="flex font-light text-gray-500 border-b"
                style={{
                    "borderImage":`linear-gradient(90deg, #166534 ${props.percent}%, #e5e7eb 0 100%) 1`
                }}
                >
                <p>{format(props.tanggalTanam, "d MMMM R")}</p>
                <div className="grow mx-2">
                    <p
                        style={{
                            "width" : `${props.percent}%`
                        }}
                    className="text-right whitespace-nowrap">{format(new Date(), "d MMMM R")}</p>
                </div>
                <p>{format(props.perkiraanPanen, "d MMMM R")}</p>
            </div>
        </div>
    )
}