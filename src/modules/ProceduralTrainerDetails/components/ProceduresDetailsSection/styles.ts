import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    rowGap: 5,
    columnGap: 5,
    [basicTheme.breakpoints.up("tablet")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  title: {
    mt: 8,
    mb: 20,
  },
};
