import Todo from "./todoList/Todo"
import Kalender from "./kalender/Kalender"
import { useState } from "react"
import { startOfDay, isEqual } from "date-fns"

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

const getTodoList = (date) =>{
    return todoMonth.filter((td)=> isEqual(td.date, date))
}


export default function TodoHarian(){

    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const handleChangeSelectedDate = (date) => {
        setSelectedDate(startOfDay(date));
    }

    console.log(getTodoList(selectedDate));

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