


export default function Header(props){

    return (
        <header className="p-4 px-12 ">
            <div className="flex justify-between">
                <h1 className="text-yellow-800 bg-yellow-200 text-lg font-bold px-3 rounded-sm">{props.children}</h1>
                <div className="rounded-r-full rounded-l-full bg-white px-3">
                    Zidan Putra
                </div>
            </div>
            
        </header>
    )
}