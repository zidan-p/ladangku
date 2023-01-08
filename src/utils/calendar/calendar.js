import { 
    getMonth, 
    getYear, 
    startOfMonth, 
    endOfMonth, 
    set, 
    compareAsc ,
    startOfDay
} from "date-fns"

export const generateDate = (
    month = getMonth(new Date()), 
    year = getYear(new Date())
) => {
    const dates = new Date(year, month);
    const firstDayOfTheMonth = startOfMonth(dates);
    const lastDayOfMonth = endOfMonth(dates);

    const arrayOfDate = []


    //create prefix
    for(let i = -(firstDayOfTheMonth.getDay() - 1) ; i <= 0  ; i++){
        arrayOfDate.push(
            {
                currentMonth: false, 
                date:set(firstDayOfTheMonth, {date: i}),
                today : compareAsc(
                    set(firstDayOfTheMonth, {date: i}),
                    startOfDay(new Date())
                ) === 0
            }
        )
    }

    //generate curretn date
    for(
        let i = firstDayOfTheMonth.getDate(); 
        i <= lastDayOfMonth.getDate(); 
        i++
    ){
        arrayOfDate.push(
            {
                currentMonth: true, 
                date:set(firstDayOfTheMonth, {date: i}),
                today : compareAsc(
                    set(firstDayOfTheMonth, {date: i}),
                    startOfDay(new Date())
                ) === 0
            }
        )
    }

    //create suffix
    const remaining = 42 - arrayOfDate.length;
    for(
        let i = lastDayOfMonth.getDate()+1; 
        i <= lastDayOfMonth.getDate()+remaining; 
        i++
    ){
        arrayOfDate.push(
            {
                currentMonth: false, 
                date:set(firstDayOfTheMonth, {date: i}),
                today : compareAsc(
                    set(firstDayOfTheMonth, {date: i}),
                    startOfDay(new Date())
                ) === 0
            }
        )
    }

    return arrayOfDate;
}