import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    padding: 15,
    maxWidth: 400,
    borderRadius: 10,
    transition: "all 250ms ease",
    "&:hover": {
      transform: "translateY(-15px)",
      boxShadow: "10px 10px 20px #000000",
    },
  },
  sliderWrapper: {
    position: "relative",
  },
  sliderHoverMask: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 4,
    top: 0,
    left: 0,
    right: 0,
    transition: "all 200ms ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      "& img": {
        opacity: 1,
      },
    },
  },
  sliderHoverImg: {
    transition: "all 200ms ease",
    opacity: 0,
    filter: "drop-shadow(0 0 5px #64ffda)",
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    lineHeight: 1.4,
    padding: 20,
    color: theme.palette.text.primary,
  },
  img: {},
  text: {
    margin: 0,
    wordBreak: "break-word",
  },
}));

export default "styles";
