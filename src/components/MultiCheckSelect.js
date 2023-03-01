import React from "react";
import {
  Select,
  MenuItem,
  FormHelperText,
  OutlinedInput,
  Tooltip,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListSubheader from "@material-ui/core/ListSubheader";
import DeletableChip from "./DeletableChip";

const useStyles = makeStyles((theme) => ({
  cont: {
    height: 500
  },
  select: {
    "& .MuiOutlinedInput-input": {
      minHeight: 38,
      padding: 9,
      marginRight: 0,
      paddingRight: 30
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 295,
    maxWidth: 600,
    "& .MuiOutlinedInput-root": {
      padding: 0
    }
  },
  chips: {
    // margin: 3,
    display: "flex",
    flexWrap: "wrap",
    padding: 0
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  menuItem: {
    maxHeight: 30,
    paddingLeft: theme.spacing(0)
  },
  tooltipPopper: {
    backgroundColor: "black"
    // color : 'red'
  },
  arrow: {
    color: "black"
  },
  disabledCheckSelect: {
    opacity: 0.5,
    maxHeight: 30,
    paddingLeft: theme.spacing(0),
    cursor: "default",
    // pointerEvents: "none"
    // button: {
    //   transition: 'none',
    // },

    "&:hover": {
      background: "none"
    }
    // button: {
    //   '&:hover': {
    //   backgroundColor: 'black'
    //   }
    // }
  },
  disabledListItemText: {
    // opacity: 0.5,
    // pointerEvents: "none"
  },
  menuItemCont: {
    opacity: 0.5,
    pointerEvents: "none"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left"
  },
  getContentAnchorEl: null,

  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      // width: 250
    }
  },
  MenuListProps: {
    dense: true,
    subheader: <ListSubheader>Testing 123</ListSubheader>,
    style: {
      backgroundColor: "inherit",
      width: "100%",
      maxWidth: 500,
      position: "relative",
      overflow: "auto",
      maxHeight: 400
    }
  }
};

const PopperProps = {
  rippleBackgroundColor: "black"
};

export default function MultiCheckSelect(props) {
  const { options, selectLabel, fullWidth = true, multiple = true } = props;
  const classes = useStyles();
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (event) => {
    const selected = event.target.value;

    // console.log(selected);

    // // selected.length === 0 ||

    // if (typeof selected === "undefined" || typeof selected[0] === "undefined") {
    //   console.log("HEREEEE");
    //   return;
    // }

    setFieldValue("courseSelections", selected, false);
  };

  const handleDelete = (chipToDelete) => {
    const updatedSelections = values.courseSelections.filter(
      (chip) => chip !== chipToDelete
    );

    setFieldValue("courseSelections", updatedSelections, false);
  };

  const isSelected = (courseCode) =>
    values.courseSelections.indexOf(courseCode) !== -1;

  const isDisabled = true;

  return (
    <div className={classes.cont}>
      <FormControl variant={"outlined"} className={classes.formControl}>
        <InputLabel className={classes.label} id="multi-check-select-label">
          {"Choose Two"}
        </InputLabel>
        <Select
          className={classes.select}
          labelId="multi-check-select-label"
          id={`multi-check-select-id`}
          label="Choose Two"
          multiple={multiple}
          fullWidth={fullWidth}
          value={values.courseSelections}
          onChange={handleChange}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <DeletableChip
                  value={value}
                  onDelete={handleDelete}
                  // className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {options.map((course) => {
            const isItemSelected = isSelected(course.courseCode);
            return (
              <MenuItem
                disableRipple={isDisabled}
                // onChange={(event) => {
                //   event.stopPropagation();
                //   event.preventDefault();
                // }}
                // disabled={course.courseCode === "BSC 2010C" ? true : false}
                // className={classes.menuItem}
                className={
                  isDisabled ? classes.disabledCheckSelect : classes.menuItem
                }
                key={course.courseCode}
                value={course.courseCode}
              >
                {/* <Tooltip
                    title="here"
                    placement="right"
                    arrow
                    classes={{ tooltip: classes.tooltipPopper }}
                  > */}
                {/* <span> */}

                <Tooltip
                  title="here"
                  placement="right"
                  arrow
                  classes={{
                    tooltip: classes.tooltipPopper,
                    arrow: classes.arrow
                  }}
                >
                  <div
                    // className={classes.menuItemCont}
                    onClick={(event) => {
                      console.log("HeRRE");
                      event.stopPropagation();
                      event.preventDefault();
                    }}
                  >
                    <Checkbox disabled checked={isItemSelected} />
                    <span className={classes.itemText}>
                      {`${course.courseCode} - ${course.courseName}`}
                      <strong>{` Credits: ${course.creditHours}`}</strong>
                    </span>
                  </div>
                </Tooltip>

                {/* </span> */}
                {/* </Tooltip> */}
                {/* <ListItemText
                  primary={
                    <span>
                      {`${course.courseCode} - ${course.courseName}`}{" "}
                      <strong>{` Credits: ${course.creditHours}`}</strong>
                    </span>
                  }
                /> */}

                {/* </div> */}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
