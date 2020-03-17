import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";


const AssignTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    

    useEffect(() => {
        axiosWithAuth().post('todos/assign/')
            .then(res => {
                console.log(res.data)
                const futureDate = dayjs(startDate.toString()).format("x");
                setDate(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []) 

    console.log(<DatePicker />, "This is the date picker")
    return (   
        <DatePicker 
        wrapped size = "medium"
        className = "date-picker"
        selected = {startDate}
        onChange = {date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        minDate={new Date()}
        timeCaption="time"
        dateFormat ="MMMM d, yyyy h:mm aa"
         />
  )}

  export default AssignTime;