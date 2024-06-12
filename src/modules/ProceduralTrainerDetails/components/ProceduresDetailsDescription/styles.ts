import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    bgcolor: basicTheme.palette.mainPalette.white,
    borderRadius: 6,
    p: 10,
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    [basicTheme.breakpoints.up("laptop")]: {
      maxWidth: "50%",
      ml: "auto",
    },
  },
  starsContainer: {
    display: "flex",
    columnGap: 2,
    alignItems: "center",
  },
  iconsContainer: {
    display: "flex",
    columnGap: 2,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    mt: 2,
  },
  description: {
    mt: 4,
    display: "flex",
    flexDirection: "column",
    typography: basicTheme.typography.textSmallSecondary,
  },
  button: {
    mx: "auto",
    px: 12,
    py: 2,
    mt: 5,
    bgcolor: basicTheme.palette.mainPalette.black,
    color: basicTheme.palette.mainPalette.white,
    borderRadius: 4,
    display: "flex",
    "&:hover": {
      bgcolor: basicTheme.palette.mainPalette.black,
    },
  },
};
