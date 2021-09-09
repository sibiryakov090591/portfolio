import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 300,
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    margin: 0,
    wordBreak: "break-word",
    color: theme.palette.text.primary,
  },
  icon: {
    display: "block",
    height: 60,
  },
}));

export default "styles";
