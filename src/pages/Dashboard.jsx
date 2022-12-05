import { useState } from "react";
import {
  Grid,
  Typography
} from "@material-ui/core"
import Navbar from "../components/Navbar";
import MarketInsight from "../components/MarketInsight";
import Menu from "../components/Menu";
import DatePicker from "../components/DatePicker";
import { useStyles } from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  const [days, setDays] = useState(7);
  const [status, setStatus] = useState(true);
  const onChangeStatus = (val) => {
    setStatus(val);
  };
  const onChangePeriod = (val) => {
    setDays(val);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Menu changeStatus={onChangeStatus}/>
        <main className={classes.content}>
            {status ? 
              <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h1">Dashboard</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <DatePicker changePeriod={onChangePeriod} />
                </Grid>
                <Grid item xs={12}>
                  <MarketInsight days={days} />
                </Grid>
              </Grid>
            : null}
        </main>
      </div>
    </div>
  )
};