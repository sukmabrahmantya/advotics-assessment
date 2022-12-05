import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 276,
  },
  moreIcon: {
    margin: -12
  },

  listItem: {
    padding: "0px",
  },

  rootContent: {
    display: "flex",
    width: "100%",
    margin: "0",
    paddingRight: "36px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    padding: "0",
  },
  content: {
    flex: "1 0 auto",
    padding: "0",
    "& p": {
      fontSize: "1.25rem",
      margin: "0",
      fontWeight: "bold"
    }
  },
  cover: {
    maxWidth: 45,
    height: 40,
    flexGrow: "8",
  },
  controls: {
    display: "flex",
    alignItems: "left",
    padding: "0",
    "& p": {
      flexGrow: 0,
      margin: "0",
      fontSize: "10px",
      fontWeight: "inherit",
    }
  },
  fontIcon: {
    color: "red",
    fontSize: "12px",
    fontWeight: "bold",
    marginRight: theme.spacing(0.25),
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    "& p": {
      color: theme.palette.text.secondary
    }
  },
  percentage: {
    color: "red",
    fontSize: "10px",
    fontWeight: "bold",
    flexGrow: 0,
  },

  cardHeading: {
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 0,
    "&>p": {
      fontSize: "0.875rem",
      margin: 0,
      color: theme.palette.secondary.contrastText
    }

  },
  cardHeading2: {
    display: "flex",
  },
}));

export { useStyles };