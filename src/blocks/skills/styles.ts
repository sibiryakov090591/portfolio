import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  skills: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.dark,
    paddingBottom: 20,
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  skillsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    gap: 20,
    "@media screen and (max-width: 792px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

export default "styles";
