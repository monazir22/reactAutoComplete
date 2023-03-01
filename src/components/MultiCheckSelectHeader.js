import React from "react";
import { ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

export default function MultiCheckSelectHeader(props) {
  const { minSelectAmount, amountType } = props;

  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <ListSubheader>Select {}</ListSubheader>
    </>
  );
}
