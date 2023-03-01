import React from "react";
import { useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import MultiCheckSelect from "./MultiCheckSelect";
import { courseOptions } from "../models/courseOptions";

export default function CourseOptionsStep(props) {
  const { values, setFieldValue } = useFormikContext();

  const section = courseOptions[0];

  return (
    <>
      <MultiCheckSelect options={section.options} selectLabel={"Choose 2"} />
    </>
  );
}
