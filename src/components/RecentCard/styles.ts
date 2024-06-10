import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    bgcolor: basicTheme.palette.grayPalette.gray,
    borderRadius: 6,
    alignItems: "center",
    px: 8,
    pt: 23,
    pb: 5,
    textAlign: "center",
    width: "100%",
  },
  iconsContainer: {
    display: "flex",
    columnGap: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    mt: 5,
  },
  subtitle: {},
};
