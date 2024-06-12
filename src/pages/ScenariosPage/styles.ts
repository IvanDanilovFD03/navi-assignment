import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    pt: 25,
    bgcolor: basicTheme.palette.grayPalette.lightGray,
    height: "100%",
    [basicTheme.breakpoints.up("large")]: {
      pt: 35,
    },
  },
};
