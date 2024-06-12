import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    pt: 25,
    bgcolor: basicTheme.palette.grayPalette.graySecondary,
    height: "100%",
    [basicTheme.breakpoints.up("large")]: {
      pt: 35,
      // height: "100vh",
      // maxHeight: "100vh",
    },
  },
};
