import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "react-datepicker/dist/react-datepicker.css";
import axiosWithAuth from "../../../utils/AxiosWithAuth.js";
import AddTodoBtn from "./AddTodoBtn.js";
dayjs.extend(advancedFormat);



const AssignTime = (props) => {
    const { setInfo, info } = props
    const [startDate, setStartDate] = useState(new Date());
    const futureDate = dayjs(startDate.toString()).format('x')


    const handleChange = (date) => {
        setStartDate(date)
        setInfo ({...info, due: futureDate })
    }
    
    // useEffect(() => {
    //     axiosWithAuth().post(`https://stage-homerun-be.herokuapp.com/todos/household`)
    //         .then(res => {
    //             console.log(res.data)
    //             const futureDate = dayjs(startDate.toString()).format("x");  
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, []) 

    // console.log(startDate, "this is start date data")
    // console.log(<DatePicker />, "This is the date picker")
    // console.log( "Added")
    return (   
        <DatePicker 
        wrapped size = "medium"
        className = "date-picker"
        selected = {startDate}
        onChange = {handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        minDate={new Date()}
        timeCaption="time"
        dateFormat ="MMMM d, yyyy h:mm aa"
        />
  )}

  export default AssignTime;