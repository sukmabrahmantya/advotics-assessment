import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#FFFFFF",
    color: theme.palette.info.main,
    width: "100%",
    height: "48px",
    textTransform: "none",
    "& span": {
      justifyContent: "space-between"
    },
    "&:focus": {
      outline: "5px auto #37B04C"
    },
    "& p": {
      marginBottom: 0,
      fontFamily: "Open Sans",
      fontSize: "1rem",
    }
  },
  icon: {
    color: theme.palette.info.light,
    fontSize: "1rem",
    marginRight: theme.spacing(0.25),
  },
  periodRoot: {
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  period: {
    paddingLeft: 16,
    color: theme.palette.info.light
  },
  date: {
  }
}));

export { useStyles };