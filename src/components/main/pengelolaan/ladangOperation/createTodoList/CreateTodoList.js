import { useEffect, useRef, useState } from "react";
import  ListTodo  from "./ListTodo"

export default function CreateTodoList(props) {

    const inputRef = useRef(null)
    const [listTodo, setlistTodo] = useState([]);

    const handleOnClickCreate = (event) => {
        event.preventDefault()
        if(inputRef.current.value === "") return

        setlistTodo([...listTodo, inputRef.current.value]);
        inputRef.current.value = ""
    }

    useEffect(()=>{
        props.collectData("todoList", listTodo);
    },[listTodo])

    const handleDeletelist = (index) => {
        let buffArray = [...listTodo]
        buffArray.splice(index,1)
        setlistTodo(buffArray);
    }


    let todoListBuffer = [];
    if(listTodo.length !== 0){
        todoListBuffer = listTodo.map((todo, i) => {
            return <ListTodo key={i} index={i} content={todo} onDelete={handleDeletelist} />
        })
    }



    return (
        <div className="flex grow flex-col p-4 max-h-screen overflow-y-auto">
            <h3 className="text-xl font-semibold inline-flex gap-2 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                Todo List Harian Hingga panen
            </h3>
            <form onSubmit={handleOnClickCreate} className="inline-flex w-full items-center gap-2 mb-6">
                <input
                    
                    ref={inputRef}
                    type="text"
                    className="border grow p-1 border-gray-400 rounded-sm focus-within:outline-gray-500 "
                />
                <button 
                    onClick={handleOnClickCreate}
                    className="p-1.5 border cursor-pointer hover:bg-gray-200">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                </button>
            </form>
            <div className="grow overflow-y-auto">
                <ul className="flex flex-col overflow-y-auto">
                    {todoListBuffer}
                </ul>
            </div>
        </div>
    );
}
