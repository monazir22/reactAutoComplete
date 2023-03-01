import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useField, useFormikContext } from "formik";
// import { at } from "lodash";
import { degreesOffered } from "../models/degreesOffered";

export default function DegreeSearch(props) {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const isError = meta.touched && !!meta.error;
  // const [touched, error] = at(meta, "touched", "error");
  // const isError = touched && error && true;
  const textFieldProps = {
    fullWidth: true,
    label: "Degree",
    margin: "normal",
    variant: "outlined"
  };

  return (
    <Autocomplete
      {...field}
      blurOnSelect
      fullWidth
      name={"degree"}
      options={degreesOffered}
      value={field.value}
      onChange={(_, value) => {
        setFieldTouched(field.name, true);
        setFieldValue(field.name, value);
      }}
      getOptionSelected={(option, value) => option.value === value.value}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <TextField
          {...params}
          {...textFieldProps}
          helperText={isError ? "Degree Required" : " "}
          error={isError}
        />
      )}
    />
  );
}
