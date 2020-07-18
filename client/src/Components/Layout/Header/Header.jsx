import React from "react";
import {AppBar, Toolbar,} from "@material-ui/core";
import useStyles from "./styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from "../../../Pages/Auth/AuthActionsApi";
import {useDispatch, useSelector} from "react-redux";


export default function Header(props) {
  var classes = useStyles();
  var userDispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sparkol
        </Typography>
        <Typography>
          Hello, {user.name}
        </Typography>
        <Button color="inherit" onClick={() =>
          userDispatch(signOut(
            props.history
          ))
        }>
          <ExitToAppIcon/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
