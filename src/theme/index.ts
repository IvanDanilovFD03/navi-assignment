import { createTheme } from "@mui/material";

const MyriadProBoldFontFamily = "'MyriadProBold', Arial, serif";
const MyriadProRegularFontFamily = "'MyriadProRegular', Arial, serif";

export const basicTheme = createTheme({
  palette: {
    background: {
      default: "transparent",
    },
    mainPalette: {
      white: "#fff",
      black: "#000",
    },
    redPalette: {
      red: "#ff0042",
      redSecondary: "#fe0143",
      darkRed: "#cf0036",
    },
    grayPalette: {
      gray: "#d2d5dc",
      graySecondary: "#f7f7f7",
      lightGray: "#f2f6ff",
      grayUnavailable: "#d1d1d1",
      grayUnavailableSecondary: "#aeaeae",
      grayText: "#919191",
      blueGray: "#d2dbf0",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1240,
      desktop: 1440,
      large: 1920,
    },
  },
  typography: {
    fontFamily: [MyriadProBoldFontFamily, MyriadProRegularFontFamily].join(","),
    h1: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "111.13px",
      lineHeight: "100%",
    },
    h2: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "94.27px",
      lineHeight: "normal",
    },
    h3: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "94.27px",
      lineHeight: "normal",
    },
    h4: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "65.89px",
      lineHeight: "normal",
    },
    h5: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "55px",
      lineHeight: "normal",
    },
    h6: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "53.86px",
      lineHeight: "100%",
    },
    titleMain: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "53.86px",
      lineHeight: "normal",
    },
    tileSecondary: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "46.17px",
      lineHeight: "normal",
    },
    titleSmall: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "40.85px",
      lineHeight: "normal",
    },
    textMain: {
      fontFamily: MyriadProBoldFontFamily,
      fontWeight: 700,
      fontSize: "35px",
      lineHeight: "normal",
    },
    textSecondary: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "35px",
      lineHeight: "normal",
    },
    textSmall: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "32.46px",
      lineHeight: "130%",
    },
    textSmallBold: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 700,
      fontSize: "32.46px",
      lineHeight: "normal",
    },
    textSmallSecondary: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "normal",
    },
    textSmallSecondaryBold: {
      fontFamily: MyriadProRegularFontFamily,
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "normal",
    },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "textMain",
          color: "#000",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h2",
            subtitle2: "h2",
            titleMain: "h6",
            tileSecondary: "h6",
            titleSmall: "h6",
            textMain: "p",
            textSecondary: "p",
            textSmall: "p",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
        },
        styleOverrides: {
          root: {
            margin: 0,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 16,
            paddingRight: 16,
            [basicTheme.breakpoints.up("tablet")]: {
              paddingLeft: 40,
              paddingRight: 40,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: 0,
            textTransform: "none",
            color: "inherit",
            "&[disabled]": {
              color: "#8D969D",
              backgroundColor: "#D1D5D8",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecorationColor: "unset",
            textDecorationThickness: 1,
            textUnderlineOffset: 1.5,
            "&:disabled": {
              color: "lightSecondaryGrey",
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  },
  basicTheme
);
