import React from "react";
import "./styles.css";
import { Paper, AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ScheduleParamsForm from "./components/ScheduleParamsForm";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, useStyles } from "./styles/appStyles";

export default function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Degree Planner
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <ScheduleParamsForm />
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}
