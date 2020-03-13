import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input, Icon, Button, Modal, Header, Dropdown as SemanticDropDown } from "semantic-ui-react";


const AssignTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    const futureDate = dayjs(startDate.toString()).format("x");
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