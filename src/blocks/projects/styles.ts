import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  projects: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.dark,
    paddingBottom: 20,
  },
  projectsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    gap: 20,
    "@media screen and (max-width: 1042px)": {
      justifyContent: "center",
    },
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 50,
  },
}));

export default "styles";
