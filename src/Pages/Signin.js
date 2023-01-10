import axios from "axios";
import { useRef, useState, useEffect } from "react"
import InputText from "../components/form/Input"
import { Link, redirect, useNavigate } from "react-router-dom";
import { sendSigninData } from "../Service/auth";
import { checkLogin } from "../features/auth/checkLogin";


export default function Signin(){

    const formRef = useRef(null);
    const [formDataSignin, setFormDataSignin] = useState({
        first_name  : "",
        last_name   : "",
        email       : "",
        password    : "",
        phone       : ""
    });
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        checkLogin()
    },[])

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataSignin((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleError = () => {
        setIsError(true)
    }
    const handleSuccess = () => {
        navigate("/login")
        setIsSuccess(true)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let result = await sendSigninData(formDataSignin);
        if(result.success){
            console.log(result);
            handleSuccess();
        }else{
            handleError()
        }
    }


    return(
        <div className="w-full h-screen bg-green-100 flex flex-col justify-center">
            <div className=" min-w-[36rem] mx-auto  flex">
                <div className="bg-green-700 h-full basis-4"></div>
                <form onSubmit={(e)=>handleOnSubmit(e)} ref={formRef} action="" className="grow bg-white px-10 p-10 rounded-r-xl">
                    <div className="flex justify-between border-b mb-4 items-center">
                        <h1 className={`transition-all  text-2xl font-semibold py-4  `}>Daftar</h1>
                        <h5 className={`transition  ${isSuccess ? "opacity-100" : "opacity-0"} text-green-700 text-lg font-thin`}>Sukses mendaftar</h5>
                    </div>
                    {isError && <p className="text-red-800 italic">ada yang salah, mungkin bisa coba dengan kombinasi yang lain</p>}
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="first_name" >nama Pertama</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="last_name">Nama Terakhir</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="email">Email (tidak boleh sama)</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} type="password" name="password">Password <span>(gunakan kombinasi angkat dan huruf)</span></InputText>
                    </div>
                    <div className="mb-4">
                        <InputText onChange={handleChangeForm} name="phone">Nomor Telepon (tidak boleh sama)</InputText>
                    </div>
                    <div className="flex justify-between items-end">
                        <button type="submit" className="p-2 px-10 rounded-sm bg-green-800 hover:bg-green-700 active:bg-green-900 text-white rouded">Submit</button>
                        <span className="text-gray-500 hover:underline hover:text-black text-sm"> <Link to={"/login"}>sudah punya akun? klik disini</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}