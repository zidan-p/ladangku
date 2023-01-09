import axios from "axios";
import { useRef, useState } from "react"
import InputText from "../components/form/Input"
import { Link } from "react-router-dom";
import { sendSigninData } from "../Service/auth";


export default function Signin(){

    const formRef = useRef(null);
    const [formDataSignin, setFormDataSignin] = useState({
        first_name  : "",
        last_name   : "",
        email       : "",
        password    : "",
        phone       : ""
    });

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataSignin((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    const handleError = () => {}
    const handleSuccess = () => {}

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let result = await sendSigninData(formDataSignin);
        if(result.success){
            setTimeout(() => {
                window.Location = "/login"
            }, 500)
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
                    <h1 className="text-2xl font-semibold py-4 mb-4 border-b">Daftar</h1>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="first_name" >nama Pertama</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="last_name">Nama Terakhir</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} name="email">Email</InputText>
                    </div>
                    <div className="mb-2.5">
                        <InputText onChange={handleChangeForm} type="password" name="password">Password</InputText>
                    </div>
                    <div className="mb-4">
                        <InputText onChange={handleChangeForm} name="phone">Nomor Telepon</InputText>
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