import Todo from "./todoList/Todo"
import Kalender from "./kalender/Kalender"


export default function TodoHarian(){

    return (
        <section className="flex p-4 px-12">
            <div id="calendar" className="basis-1/2 p-3"> 
                <Kalender />
            </div>

            <div id="todo-list" className="basis-1/2 p-3">
                <Todo />
            </div>
        </section>
    )
}