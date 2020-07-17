import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {useSelector} from "react-redux";

export default function Dashboard(props) {
  const classes = useStyles();
  const user = useSelector(state => state.auth.user)
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="column"

      >
        <Paper className={classes.root}  style={{ minHeight: '100vh' }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justify="center"
          >
            <Grid item >
             <div>
               <Typography variant="h2" component="h3">
                 Your Id: {user.id}
               </Typography>
             </div>
            </Grid>
            <Grid item >
              <div>
                <Typography variant="h2" component="h3">
                  Your name: {user.name}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
