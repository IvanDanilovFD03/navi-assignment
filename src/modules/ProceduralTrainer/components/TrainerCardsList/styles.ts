import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    columnGap: 21,
    width: "100%",
    pt: 5,
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
    minWidth: 400,
    width: 400,
    cursor: "pointer",
    [basicTheme.breakpoints.up("laptop")]: {
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },
    [basicTheme.breakpoints.up("large")]: {
      minWidth: 600,
      width: 600,
    },
    a: {
      width: "100%",
      textDecoration: "none",
    },
  },
};
