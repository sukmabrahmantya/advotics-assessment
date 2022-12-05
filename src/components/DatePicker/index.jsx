import React, { useState, useEffect } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import "moment/min/locales";
import "./date-picker.css";
import Period from "./period";

const range = {
  Today: [moment(), moment()],
  Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
  "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
  "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
  "This Month": [moment().startOf("month"), moment()],
}
const start = moment().subtract(7, "days");
const end = moment().subtract(1, "days");
const minDate = moment().subtract(6, "month");
const maxDate = moment().subtract(1, "days");

export default function DatePicker(props) {
  // const  DateRange = forwardRef((props, ref) => <DatePicker innerRef={ref} {...props} />)
  const [dateValue, setDateValue] = useState({
    days: 7,
    fromDate: moment().subtract(7, "days"),
    toDate: moment().subtract(1, "days"),
  });

  const onHandle = (e, picker) => {
    const days = (moment(picker.endDate._d.toISOString()))
      .diff((moment(picker.startDate._d.toISOString())),"days") + 1;
    
    setDateValue({
      ...dateValue,
      fromDate: picker.startDate._d.toISOString(),
      toDate: picker.endDate._d.toISOString(),
      days
    });
  };
  
  useEffect(() => {
    props.changePeriod(dateValue.days);
  }, [dateValue.days]);

  return (
    <DateRangePicker
      startDate={start}
      endDate={end}
      ranges={range}
      opens={"left"}
      alwaysShowCalendars={true}
      onEvent={onHandle}
      minDate={minDate}
      maxDate={maxDate}
    >
      <Period fromDate={dateValue.fromDate} toDate={dateValue.toDate} />
    </DateRangePicker>
  )
};


