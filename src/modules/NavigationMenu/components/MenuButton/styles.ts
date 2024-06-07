import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 6,
    cursor: "pointer",
  },
  icon: {
    width: "auto",
    height: 24,
    [basicTheme.breakpoints.up("large")]: {
      width: 64,
      height: 52,
    },
  },
  logo: {
    width: "auto",
    height: 24,
    [basicTheme.breakpoints.up("large")]: {
      width: 170,
      height: 52,
    },
  },
};
