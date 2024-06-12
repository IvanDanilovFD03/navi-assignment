import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    px: 8,
    pt: 17,
    pb: 10,
    boxShadow: "4px 7px 15px rgba(0, 0, 0, 0.2)",
  },
  percentage: {
    ml: "auto",
  },
  title: {
    mt: 20,
    mb: 8,
    textAlign: "center",
    height: 88,
    maxWidth: 340,
    [basicTheme.breakpoints.up("large")]: {
      mt: 95,
    },
  },
  subtitle: {
    textAlign: "center",
    maxWidth: 340,
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 9,
    mt: 11,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  button: {
    p: 6,
    borderRadius: "100%",
    bgcolor: basicTheme.palette.mainPalette.white,
    "&:hover": {
      bgcolor: basicTheme.palette.mainPalette.white,
    },
  },
};
