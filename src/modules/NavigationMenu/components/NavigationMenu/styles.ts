import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    width: "0",
    display: "flex",
    alignItems: "start",
    overflow: "hidden",
  },
  openRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "100vw",
    pl: 6,
    pr: 14,
    py: 14,
    bgcolor: basicTheme.palette.redPalette.red,
    height: "100vh",
    transition: "width 0.5s ease-in-out",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    [basicTheme.breakpoints.up("laptop")]: {
      width: 600,
    },
    [basicTheme.breakpoints.up("large")]: {
      width: 800,
    },
  },
  menuButtonContainer: {
    position: "absolute",
    top: 56,
    left: 32,
  },
  openMenuButtonContainer: {
    ml: 2,
    mb: 10,
    [basicTheme.breakpoints.up("large")]: {
      mb: 50,
    },
  },
  navigationListContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "start",
    position: "relative",
    transition: "visible 0.5s ease-in-out",
  },
  blackBackground: {
    position: "absolute",
    zIndex: 1,
    content: "''",
    display: "flex",
    bgcolor: "rgba(0, 0, 0, 0.5)",
    width: "100vw",
    left: 0,
    top: 0,
    height: "100vh",
  },
  closeIconButton: {
    position: "absolute",
    top: 56,
    right: 24,
  },
  closeIcon: {
    color: basicTheme.palette.mainPalette.white,
    width: 28,
    height: 28,
  },
};
