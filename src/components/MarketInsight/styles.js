import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#F7F7F7",
    boxShadow: "none",
    paddingTop: "32px"
  },
  heading: {
    color: "#FFFFFF",
  },
  accordionSummary: {
    backgroundColor: "#37B04C",
    borderRadius: "2px",
  },
  cardHeading: {
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "&>h3": {
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  cardHeading2: {
    display: "flex",
  },
  fontIcon: {
    color: "white",
    height: 28,
    width: 28,
    fontWeight: "bold",
    marginRight: theme.spacing(0.25),
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  help: {
    textDecoration: "underline",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "300",
    "&:hover": {
      color: theme.palette.text.primary
    }
  }
}));

export { useStyles };