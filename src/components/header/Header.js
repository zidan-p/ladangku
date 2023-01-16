import { getLocalValue } from "../../features/auth/dataStorage";



export default function Header(props){

    function logout(){
        localStorage.removeItem("userProfile");
        window.location.pathname = "/login"
    }
    

    return (
        <header className="p-4 px-12 ">
            <div className="flex justify-between">
                <h1 className="text-yellow-800 bg-yellow-200 text-lg font-bold px-3 rounded-sm">{props.children}</h1>
                <div className="inline-flex">
                    <div className=" rounded-l border py-1 bg-white px-3">
                        {getLocalValue("first_name")}
                    </div>
                    <div className=" border-y text-gray-500 py-1 bg-white px-3">
                        {getLocalValue("email")}
                    </div>
                    <button onClick={logout} className="bg-red-500 text-white py-1 hover:bg-red-600 active:bg-red-700 px-5 rounded-r">
                        Logout
                    </button>
                </div>
            </div>
            
        </header>
    )
}