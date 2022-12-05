
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons"
import { SalesCard } from "./Cards/Sales";
import { AverageCard } from "./Cards/Average";
import { BestCard } from "./Cards/Best";
import { useStyles } from "./styles";
import HelpIcon from "../../assets/help.png";

export default function MarketInsight(props) {
  const { days } = props;
  const classes = useStyles();

  return (
    <Accordion defaultExpanded className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMore style={{ color: '#FFFFFF' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
      >
        <div className={classes.cardHeading}>
          <Typography variant="h3" className={classes.heading}>MARKET INSIGHT</Typography>
          <div className={classes.cardHeading2}>
            <div className={classes.labelRoot}>
              <img src={HelpIcon} alt="icon" className={classes.fontIcon} />
              <a className={classes.help} href="/">Click Here for Help</a>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SalesCard days={days}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <AverageCard days={days}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <BestCard days={days} title={"BEST SELLING SKU"} />
          </Grid>
          <Grid item xs={12} md={3}>
            <BestCard days={days} title={"TOP COMPETITOR SKU"} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
};