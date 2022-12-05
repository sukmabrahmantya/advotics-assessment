import {
  Card,
  CardContent,
  IconButton,
  CardMedia
} from "@material-ui/core"
import {
  MoreVert,
  ArrowDownward
} from "@material-ui/icons";
import { useStyles } from "./styles";
import { salesTurnover } from "../../../../helpers/dummyData";
import { thisMonth } from "../../../../helpers";
import Cart from "../../../../assets/cart.svg";

export function SalesCard(props) {
  const { days } = props;
  const classes = useStyles();
  
  const category = () => {
    if (days == 1) return 1;
    else if (days == 7) return 2;
    else if (days == thisMonth) return 3;
    else if (days < thisMonth) return 4;
    else if (days > thisMonth) return 5;
  };

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeading}>
        <p>Sales Turnover</p>
        <div className={classes.cardHeading2}>
            <IconButton aria-label="settings" className={classes.moreIcon}>
                <MoreVert style={{ color: "#757575" }} />
            </IconButton>
        </div>
      </div>
      <CardContent className={classes.rootContent}>
        {salesTurnover.sort((a, b) => b.price * b.sold - a.price * a.sold).map((data, index) =>
          (
            data.category == category() ?
              <div className={classes.details} key={index}>
                <CardContent className={classes.content}>
                  <p>Rp {data.sales}</p>
                </CardContent>
                <div className={classes.controls}>
                  <div className={classes.labelRoot}>
                    <ArrowDownward className={classes.fontIcon}/>
                    <span className={classes.percentage}>{data.percentage}%</span>
                    <p>&nbsp;last period in products sold</p>
                  </div>
                </div>
              </div>
            : null
          )
        )}
        <CardMedia className={classes.cover} image={Cart}/>
      </CardContent>
    </Card>
  )
};