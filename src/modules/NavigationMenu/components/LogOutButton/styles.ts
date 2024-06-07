import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    mt: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 6,
    cursor: "pointer",
  },
  icon: {
    width: 40,
    height: "auto",
    [basicTheme.breakpoints.up("desktop")]: {
      width: 68,
    },
  },
};
