import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
  },
  content: {
      flexGrow: 1,
      padding: "32px 32px 32px 24px",
  },
}));

export { useStyles }