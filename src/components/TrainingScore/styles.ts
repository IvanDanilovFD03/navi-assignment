import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  circleContainer: {
    position: "relative",
  },
  activeTag: {
    position: "absolute",
    top: -64,
    left: "50%",
    transform: "translateX(-50%)",
    bgcolor: basicTheme.palette.mainPalette.black,
    zIndex: 5,
    borderRadius: 3,
    px: 4,
    py: 2,
    "&:after": {
      content: "''",
      position: "absolute",
      // bgcolor: basicTheme.palette.mainPalette.black,
      bottom: -40,
      left: "50%",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 10px 40px 10px",
      borderColor: `transparent transparent ${basicTheme.palette.mainPalette.black} transparent`,
      transform: "translateX(-50%) rotate(180deg)",
    },
  },
  circle: {
    mt: 2,
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "relative",
    zIndex: 1,
    bgcolor: basicTheme.palette.redPalette.darkRed,
    "&:after": {
      content: "''",
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: "100%",
      bgcolor: basicTheme.palette.redPalette.red,
      top: -8,
      zIndex: -1,
    },
  },
  lockedCircle: {
    bgcolor: basicTheme.palette.grayPalette.grayUnavailableSecondary,
    "&:after": {
      bgcolor: basicTheme.palette.grayPalette.grayUnavailable,
      content: "''",
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: "100%",
      top: -8,
      zIndex: 0,
    },
  },
  lockIcon: {
    width: 24,
    height: 24,
    zIndex: 2,
    mb: 2,
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: 2,
    mt: 8,
    mb: 1,
  },
  lockedIconsContainer: {
    mt: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
};