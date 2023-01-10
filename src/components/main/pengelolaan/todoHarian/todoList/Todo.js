import { format } from "date-fns"
import TodoList from "./TodoList";

export default function Todo({selectedDate, todoList}){

    return (
        <div className="w-full bg-white min-h-[8rem] ">
            <div className="flex items-center justify-between p-4 py-3 border-b border-b-gray-300">
                <h3 className="font-bold ">Todo List Harian </h3>
                <h5 className="font-thin text-gray-700"> {format(selectedDate, "d MMMM R")}</h5>
            </div>
            <ul className="px-4 py-2">
                {(todoList !== null && todoList !== undefined) && todoList.list.map(((list,index) => {
                    return <TodoList name={list.todo} id={index} key={index} checked={list.isChecked} />
                }))}
            </ul>
        </div>
    )
}