import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 664,
    height: '100%'
  },
  margin: {
    alignItems: 'center',
  },
  moreIcon: {
    marginRight: -12,
  },
  cardHeading: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&>h3': {
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  cardHeading2: {
    display: 'flex',
  },
  bottomChart: {
    marginTop: 48,
  },
  formControl: {
    margin: theme.spacing(1),
    width: 107,
    height: 32,
  },
}));

export { useStyles };