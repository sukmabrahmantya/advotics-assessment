import { 
  Card,
  CardContent,
  CardMedia,
  ListItem,
  IconButton,
  Typography,
  List
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useStyles } from "./styles";
import { thisMonth } from "../../../../helpers";
import { bestSelling } from "../../../../helpers/dummyData";

const CardItem = (props) => {
  const { index: propsIndex, image, title, price, sold } = props;
  const classes = useStyles();
  const index = [0,1,2,3,4]

  return (
    <ListItem className={classes.listItem}>
      <Card className={index.includes(propsIndex) ? classes.rootCardFirst : classes.rootCard}>
        <CardMedia
          className={index.includes(propsIndex) ? classes.coverFirst : classes.cover}
          image={image ? image : null}
        />
        <div className={index.includes(propsIndex) ? classes.detailsFirst : classes.details}>
          <CardContent className={index.includes(propsIndex) ? classes.contentFirst : classes.content}>
            <p>{title}</p>
          </CardContent>
          <div className={index.includes(propsIndex) ? classes.controlsFirst : classes.controls}>
            <p>Rp {price}</p>
            <p>{sold}</p>
          </div>
        </div>
      </Card>
    </ListItem>
  );
};

export function BestCard(props) {
  const { days, title, } = props;
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
        <Typography variant="h3">{title}</Typography>
        <div className={classes.cardHeading2}>
          <IconButton aria-label="settings" className={classes.moreIcon}>
            <MoreVert style={{ color: "#757575" }}/>
          </IconButton>
        </div>
      </div>
      <CardContent>
        <List>
          {bestSelling.sort((a, b) => b.price * b.sold - a.price * a.sold).map((data, index) =>
            (data.category === category() ?
              <CardItem
                key={index}
                image={data.img}
                title={data.item}
                price={data.price}
                sold={data.sold}
                index={index} />
              : null
            )
          )}
        </List>
      </CardContent>
    </Card>
  )
};