import { useState } from "react";
import moment from "moment";
import {
  DateRange,
  ExpandMore,
  ExpandLess
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "moment/min/locales"
import { useStyles } from "./styles";

export default function Period(props) {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const handleOnClick = () => {
    setStatus(!status);
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={handleOnClick}
      endIcon={status ? <ExpandLess style={{ color: "#757575" }} /> : <ExpandMore style={{ color: "#757575" }} />}
    >
      <div className={classes.periodRoot}>
        <DateRange className={classes.icon}/>
        <p className={classes.period}>Period</p>
      </div>
      <p>{moment(props.fromDate).locale("id").format("LL")} - {moment(props.toDate).locale("id").format("LL")}</p>
    </Button>
  );
};