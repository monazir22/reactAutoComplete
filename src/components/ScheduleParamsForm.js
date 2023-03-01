import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
import { Formik, Form } from "formik";
import DegreeDetailsStep from "./DegreeDetailsStep";
import * as Yup from "yup";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CourseHistoryStep from "./CourseHistoryStep";
import CourseOptionsStep from "./CourseOptionsStep";

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  nextButtonDiv: {
    margin: theme.spacing(1)
  },
  nextButton: {
    color: "primary",
    backgroundColor: "blue"
  },
  backButtonDiv: {
    margin: theme.spacing(1)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const degreeDetailsSchema = Yup.object().shape({
  degree: Yup.object().nullable().required("Degree required").shape({
    label: Yup.string().required(),
    value: Yup.string().required()
  }),
  semester: Yup.string().required("Required"),
  year: Yup.number().required("Required")
});

const courseHistorySchema = Yup.object().shape({});

const initialValues = {
  degree: null,
  semester: "",
  year: "",
  coursesTaken: [],
  courseSelections: []
};

const formStepLabels = ["Degree Details", "Course History", "Course Options"];

function renderFormStep(step) {
  switch (step) {
    case 0:
      return <DegreeDetailsStep name="degree" />;
    case 1:
      return <CourseHistoryStep name="courseHistory" />;
    case 2:
      return <CourseOptionsStep name="degree" />;
    default:
      return <DegreeDetailsStep name="degree" />;
  }
}

export default function ScheduleParamsForm() {
  const classes = useStyles();

  const [step, setStep] = useState(0);
  const schemes = [degreeDetailsSchema, courseHistorySchema];
  // const formInitialValues = [initialValues];

  const handleBack = () => {
    setStep(step - 1);
  };

  function submitForm(values, actions) {
    alert(JSON.stringify(values, null, 2));
  }

  function handleSubmit(values, actions) {
    if (step === 2) {
      submitForm(values, actions);
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    <>
      <Stepper activeStep={step} className={classes.stepper}>
        {formStepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={initialValues}
        validationSchema={schemes[step]}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        {(formik) => (
          <Form noValidate>
            {renderFormStep(step)}
            <div className={classes.buttons}>
              <div className={classes.backButtonDiv}>
                {step !== 0 && <Button onClick={handleBack}>Back</Button>}
              </div>

              <div className={classes.nextButtonDiv}>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {step === 2 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
