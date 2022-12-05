import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    padding: "0 32px",
    height: "64px",
    zIndex: "1"
  },
  navHeading: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    height: 32,
    margin: "16px 0",
    "& img": {
      height: "100%"
    }
  },
  navHeading2: {
    display: "flex",
  },
  user: {
    height: "64px"
  },
  rootContent: {
    display: "flex",
    width: "100%",
    margin: "0",
    color: "black",
    padding: "16px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    padding: "0 16px 0 0",
    fontFamily: "Open Sans",
    color: theme.palette.secondary.light
  },
  username: {
    flex: "1 0 auto",
    padding: "0",
    "& p": {
      fontSize: "0,875rem",
      margin: "0",
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  company: {
    display: "flex",
    alignItems: "right",
    padding: "0",
    "& p": {
      flexGrow: 0,
      margin: "0",
      fontSize: "10px",
      fontWeight: theme.typography.fontWeightLight
    }
  },
  iconAccount: {
    height: 32,
    width: 32,
    color: "#707070C4"
  },
}));

export { useStyles };