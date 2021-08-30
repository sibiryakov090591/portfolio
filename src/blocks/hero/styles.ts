import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  heroContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 900px)": {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },
  hero: {
    height: "100vh",
    background: theme.palette.background.dark,
  },
  presentation: {
    color: theme.palette.text.secondary,
    fontSize: 24,
    width: 360,
    "@media screen and (max-width: 450px)": {
      fontSize: 20,
      width: 300,
    },
  },
  photoWrapper: {
    borderRadius: "50%",
    overflow: "hidden",
    width: 300,
    height: 300,
    "@media screen and (max-width: 900px)": {
      marginBottom: 40,
    },
  },
  photo: {
    width: "100%",
  },
}));

export default "styles";
