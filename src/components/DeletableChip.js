import React from "react";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Cancel";
import { makeStyles, Tooltip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    // marginRight: 2,
    // marginLeft: 2,
    // paddingTop: 0,
    // paddingBottom: 0
    // // maxHeight: 20
    // margin: 3,
    padding: 0,
    margin: 3
    // minWidth: 120
  },
  disabledChip: {
    // padding: 0,
    // margin: 3,
    opacity: 0.5
  },
  disabledDeleteIcon: {
    opacity: 0.7,
    pointerEvents: "none"
  }
}));

const isDisabled = true;
const toolTipContent = (
  <Typography variant="caption">
    BSC 2011C requires BSC 2010C{<br />}remove BSC 2010C first
  </Typography>
);

export default function DeletableChip(props) {
  const classes = useStyles();

  const { onDelete, value } = props;
  return Boolean(onDelete) ? (
    <div className={classes.disabledChip}>
      <Chip
        className={classes.chip}
        key={value}
        value={value}
        label={value}
        deleteIcon={
          <Tooltip title={toolTipContent} placement="bottom">
            <span>
              <div
                //  className={classes.disabledDeleteIcon}
                onMouseDown={(event) => {
                  if (isDisabled) {
                    event.stopPropagation();
                    event.preventDefault();
                  } else if (event.button === 0) {
                    onDelete(value);
                    event.stopPropagation();
                    event.preventDefault();
                  }
                }}
              >
                <DeleteIcon
                  className="MuiChip-deleteIcon"
                  style={{ margin: "0 5px 0 0" }}
                />
              </div>
            </span>
          </Tooltip>
        }
        {...props}
      />
    </div>
  ) : (
    <Chip {...props} />
  );
}
