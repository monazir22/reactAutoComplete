import React from "react";
import { Select, MenuItem, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useField } from "formik";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function DropDownInput({ items, ...props }) {
  const classes = useStyles();

  const [field, meta] = useField(props);

  return (
    <>
      <Select
        {...field}
        error={meta.touched && !!meta.error}
        labelId="select-label2"
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {items.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && !!meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : (
        <FormHelperText> </FormHelperText>
      )}
    </>
  );
}
