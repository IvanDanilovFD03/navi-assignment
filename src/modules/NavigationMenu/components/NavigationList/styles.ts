import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 4,
    [basicTheme.breakpoints.up("desktop")]: {
      rowGap: 12,
    },
  },
  listItem: {
    width: "100%",
  },
};
