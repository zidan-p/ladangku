import { add, format, startOfDay } from "date-fns";



//length : duration month
export function generateTodoList(data, length){
    console.log(data,length);
    let arr = [];

    let hari = length * 30;
    let today = new Date()

    for(let i = 0; i < hari; i++){
        arr[i] = {
            date : format(startOfDay(add(today, {days : i})), "Y-MM-dd"),
            list : data.map(dat => {
                return {
                    todo: dat
                }
            })
        }
    }

    return arr;
}