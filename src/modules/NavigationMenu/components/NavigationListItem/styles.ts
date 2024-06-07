import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    width: "100%",
    display: "flex",
    a: {
      width: "100%",
      textDecoration: "none",
    },
  },
  listItem: {
    width: "100%",
    display: "flex",
    columnGap: 6,
    alignItems: "center",
    px: 6,
    py: 4,
    borderRadius: 6,
  },
  activeListItem: {
    bgcolor: basicTheme.palette.mainPalette.white,
  },
  icon: {
    height: 27,
    width: "auto",
    [basicTheme.breakpoints.up("large")]: {
      height: 46,
    },
  },
  iconPlaceholder: {
    height: 27,
    width: 27,
    bgcolor: basicTheme.palette.mainPalette.white,
    borderRadius: "100%",
  },
};
