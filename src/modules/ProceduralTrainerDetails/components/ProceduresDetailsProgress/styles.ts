import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    alignItems: "center",
    mt: 20,
  },
  leftStep: {
    mr: 30,
    position: "relative",
    cursor: "pointer",
    width: "max-content",
    "&:not(:first-of-type)": {
      mt: -10,
    },
  },
  rightStep: {
    ml: 30,
    cursor: "pointer",
    position: "relative",
    width: "max-content",
    "&:not(:first-of-type)": {
      mt: -10,
    },
  },
  lockedStep: {
    cursor: "default",
  },
  path: {
    position: "absolute",
    width: "auto",
    height: 130,
  },
  pathLeft: {
    right: -80,
    top: 80,
    height: 150,
  },
  lockedPathLeft: {
    right: -80,
    top: 68,
  },
  pathRight: {
    left: -90,
    top: 80,
  },
  lockedPathRight: {
    left: -80,
    top: 60,
  },
};
