import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  moreIcon: {
    margin: -12
  },
  cardHeading: {
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    "&>h3": {
      margin: 0,
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  cardHeading2: {
    display: "flex",
  },
  listItem: {
    padding: "0px",
  },
  rootCard: {
    display: "flex",
    width: "100%",
    maxHeight: 60,
    margin: "8px 0",
  },
  rootCardFirst: {
    display: "flex",
    width: "100%",
    height: 80,
    margin: "8px 0",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    padding: "8px 24px 8px 8px",
  },
  detailsFirst: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    padding: "14px 16px 14px 8px",
    backgroundColor: "#FFE7BD",
  },
  content: {
    flex: "1 0 auto",
    padding: "0",
    "& p": {
      fontSize: "1rem",
      margin: "0",
      color: theme.palette.text.disabled
    }
  },
  contentFirst: {
    flex: "1 0 auto",
    padding: "0",
    "& p": {
      fontSize: "1.25rem",
      margin: "0",
      color: theme.palette.text.disabled
    }
  },
  cover: {
    maxWidth: 60,
    flexGrow: "8",
  },
  coverFirst: {
    maxWidth: 80,
    flexGrow: "8",
  },
  controls: {
    display: "flex",
    alignItems: "left",
    padding: "0",
    "& p": {
      flexGrow: "1",
      margin: "0",
      fontSize: "0.75rem",
      color: theme.palette.text.secondary
    }
  },
  controlsFirst: {
    display: "flex",
    alignItems: "left",
    padding: "0",
    "& p": {
      flexGrow: "1",
      margin: "0",
      fontSize: "0.875",
      color: theme.palette.text.secondary
    }
  },
}));

export { useStyles };