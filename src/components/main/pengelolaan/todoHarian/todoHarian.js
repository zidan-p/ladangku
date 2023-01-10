import Todo from "./todoList/Todo"
import Kalender from "./kalender/Kalender"
import { useEffect, useState } from "react"
import { startOfDay, isEqual, parseISO, formatISO } from "date-fns"
import { fetchTodoList } from "../../../../Service/pengelolaan/todoList"
import { getLocalValue } from "../../../../features/auth/dataStorage"

const todoMonth = [
    {
        date: startOfDay(new Date()),
        todo:[
            {
            name: "use state",
            cheked: false,
            },
            {
            name: "use state",
            cheked: false,
            },
            {
            name: "use state",
            cheked: false,
            },
            {
            name: "use state",
            cheked: false,
            },
        ]
    }
]




export default function TodoHarian({ todoListParent}){
    let todos = todoListParent;
    // const [todos, setTodos] = useState(todoListParent);
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const getTodoList = (date) =>{
        console.log(todos);
        // console.log(todos)
        console.log(parseISO(todos[0]?.date))
        let littlerBuffer;
        let buffer = todos
            .filter((td)=>{
                // console.log(td);
                // console.log(td.todo.date === formatISO(date));
                // return isEqual(parseISO(td.todo.date),date)
                littlerBuffer = parseISO(td.date)
                if(
                    (littlerBuffer.getMonth() == date.getMonth() ) &&
                    (littlerBuffer.getDate() == date.getDate())
                ){
                    return true
                }
                return false
            })
            // .map(tod => {return tod.todo})

        console.log(formatISO(date));
        console.log(buffer);
        return buffer
    }

    // useEffect(() => {
    //     async function fetchTodo(){
    //         let dt = await fetchTodoList(getLocalValue("user_id"), indexLadang);
    
    //         setTodos(dt);
    //     }
    //     fetchTodo();
    // },[])

    const handleChangeSelectedDate = (date) => {
        setSelectedDate(startOfDay(date));
    }

    return (
        <section className="flex p-4 px-12">
            <div id="calendar" className="basis-1/2 p-3"> 
                <Kalender selectedDate={selectedDate} onChangeSelectedDate={handleChangeSelectedDate} />
            </div>

            <div id="todo-list" className="basis-1/2 p-3">
                <Todo selectedDate={selectedDate} todoList={getTodoList(selectedDate)[0]}/>
            </div>
        </section>
    )
}