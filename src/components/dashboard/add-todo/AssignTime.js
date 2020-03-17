import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import axiosWithAuth from "../../../utils/AxiosWithAuth.js";



const AssignTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(() => {
        axiosWithAuth().put('/todos/a12345')
            .then(res => {
                console.log(res.data)
                const futureDate = dayjs(startDate.toString()).format("x");
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