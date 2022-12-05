import { useState } from "react";
import { 
  Card,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useStyles } from "./styles";
import Input from "./input";
import Chart from "./chart";

const randomValue = () => {
  let array = [];
  for (let i = 0; i < 7; i++) {
    let a = Math.round(Math.random() * 7);
    array.push(a);
  }
  return array;
};

export function AverageCard(props) {
  const classes = useStyles();
  const [period, setPeriod] = useState(0);
  const [chart, setChart] = useState(Array(5).fill(randomValue()));

  const handleChange = (e) => {
    setPeriod(e.target.value);
    setChart(Array(5).fill(randomValue()));
  };

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeading}>
        <Typography variant="h3">AVERAGE PURCHASE VALUE</Typography>
        <div className={classes.cardHeading2}>
          <FormControl variant="outlined">
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              defaultValue={0}
              value={period}
              onChange={handleChange}
              className={classes.formControl}
              input={<Input />}
            >
              <MenuItem value={""}><em></em></MenuItem>
              <MenuItem value={0}>Last 7 days</MenuItem>
              <MenuItem value={1}>Yesterday</MenuItem>
              <MenuItem value={2}>Last 30 days</MenuItem>
              <MenuItem value={3}>This Month</MenuItem>
              <MenuItem value={4}>Custom</MenuItem>
            </Select>
          </FormControl>
          <IconButton aria-label="settings" className={classes.moreIcon}>
            <MoreVert style={{ color: "#757575" }} />
          </IconButton>
        </div>
      </div>
      <CardContent className={classes.bottomChart}>
        <Chart
          dataNett={chart[0]}
          dataGross={chart[1]}
          dataAPV={chart[2]}
          dataUPT={chart[3]}
          dataLine={chart[4]}
        />
      </CardContent>
    </Card>
  )
};