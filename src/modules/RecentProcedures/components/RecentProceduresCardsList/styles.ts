import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    columnGap: 6,
    width: "100%",
    pb: 10,
    overflowX: "auto",
    "&:-moz-read-only": {
      scrollbarWidth: "thin",
      scrollbarColor: `${basicTheme.palette.grayPalette.blueGray} ${basicTheme.palette.mainPalette.white}`,
    },
    "::-webkit-scrollbar": {
      height: 8,
    },
    "::-webkit-scrollbar-track": {
      bgcolor: basicTheme.palette.mainPalette.white,
      borderRadius: 3,
    },
    "::-webkit-scrollbar-thumb": {
      background: basicTheme.palette.grayPalette.blueGray,
      borderRadius: 3,
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: basicTheme.palette.grayPalette.blueGray,
    },
  },
  listItem: {
    minWidth: 300,
    width: 300,
    [basicTheme.breakpoints.up("large")]: {
      minWidth: 400,
      width: 400,
    },
  },
};
