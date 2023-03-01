import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: amber,
    secondary: amber
  }
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 320,
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 628,
      marginLeft: "auto",
      marginRight: "auto"
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

export { theme, useStyles };
