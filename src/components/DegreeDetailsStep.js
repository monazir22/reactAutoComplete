import React from "react";
// import TextField from "@material-ui/core/TextField";
import DegreeSearch from "./DegreeSearch";
import DropDownInput from "./DropDownInput";
// import { Field, useFormikContext, useField } from "formik";
import { Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel } from "@material-ui/core";

const semesterItems = ["Fall", "Spring", "Summer"];
const yearItems = [2020, 2021, 2022, 2023, 2024];

const useStyles = makeStyles(theme => ({
  cont: {
    // margin: theme.spacing(2),
    // marginBottom: theme.spacing(0),
    // minWidth: 500
  },
  gradTimeCont: {
    // padding: theme.spacing(2)
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  gradTitle: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(0)
  },
  formControl: {
    // margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(0),
    margin: theme.spacing(1),
    textTransform: "none",
    color: "white",
    backgroundColor: "black",
    borderRadius: 12,
    "&:hover": {
      backgroundColor: "gray",
      color: "white"
    }
  }
}));

export default function DegreeDetailsStep({ name }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.cont}>
      <Grid item xs={12}>
        <DegreeSearch name="degree" className={classes.degreeSearch} />
      </Grid>

      <Typography variant="subtitle1" className={classes.gradTitle}>
        Expected/Desired Graduation Time
      </Typography>

      <Grid container spacing={3} className={classes.gradTimeCont}>
        <Grid item xs={6}>
          <FormControl fullWidth required className={classes.formControl}>
            <InputLabel id="select-label2">Semester</InputLabel>
            <DropDownInput name="semester" items={semesterItems} />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required className={classes.formControl}>
            <InputLabel id="select-label3">Year</InputLabel>
            <DropDownInput name="year" items={yearItems} />
          </FormControl>
        </Grid>
      </Grid>

      {/* <Grid item xs={12}>
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Add Course History
        </Button>
      </Grid> */}
    </Grid>
  );
}
