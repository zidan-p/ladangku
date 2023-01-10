import axios from "axios";
import { useEffect, useRef, useState } from "react"
import InputText from "../components/form/Input"
import { Link, redirect, useNavigate } from "react-router-dom";
import { setUserData } from "../features/auth/dataStorage";
import { sendLoginData } from "../Service/auth";
import { checkLogin } from "../features/auth/checkLogin";


export default function Login(){

    const formRef = useRef(null);
    const [formDataLogin, setFormDataLogin] = useState({
        email       : "",
        password    : "",
    });
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();


    useEffect(()=>{
        checkLogin()
    },[])

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataLogin((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleError = () => {
        setIsError(true)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let result = await sendLoginData(formDataLogin);
        if(result.success){
            setUserData(result.data);
            navigate("/app/pengelolaan")
        }else{
            handleError()
        }
    }


    return(
        <div className="w-full h-screen bg-green-100 flex flex-col justify-center">
            <div className=" min-w-[36rem] mx-auto  flex">
                <div className="bg-green-700 h-full basis-4"></div>
                <form onSubmit={(e)=>handleOnSubmit(e)} ref={formRef} action="" className="grow bg-white px-10 p-10 rounded-r-xl">
                    <h1 className="text-2xl font-semibold py-4 mb-4 border-b">Masuk</h1>
                    { isError ? <p className="text-red-700 italic">email atau password salah</p> : ""}
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="email">Email</InputText>
                    </div>
                    <div className="mb-4">
                        <InputText onChange={handleChangeForm} type="password" name="password">Password</InputText>
                    </div>
                    <div className="flex justify-between items-end">
                        <button type="submit" className="p-2 px-10 rounded-sm bg-green-800 hover:bg-green-700 active:bg-green-900 text-white rouded">Submit</button>
                        <span className="text-gray-500 hover:underline hover:text-black text-sm"> <Link to={"/signin"}>belum punya akun? klik disini</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}