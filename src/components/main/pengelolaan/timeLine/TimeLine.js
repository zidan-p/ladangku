


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
                <p>15 Maret 2022</p>
                <div className="grow mx-2">
                    <p
                        style={{
                            "width" : `${props.percent}%`
                        }}
                    className="text-right">7 April 2022</p>
                </div>
                <p>15 Juni 2022</p>
            </div>
        </div>
    )
}