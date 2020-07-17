import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  centerBlock: {
    flexDirection: 'column',
    marginTop: '15%'
  }
}));
