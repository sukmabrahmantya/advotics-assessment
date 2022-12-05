import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "rgba(255,255,255, 0.8)",
  },
  drawerOpen: {
    top: "65px",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    right: "0",
  },
  drawerClose: {
    top: "65px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  active: {
    backgroundColor: "#D2D2D2",
    "& span":{
      color: theme.palette.primary.main,
      fontWeight: 600,
    }
  },
  notActive: {
    backgroundColor: "none"
  }
}));

export { useStyles };