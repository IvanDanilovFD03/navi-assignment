export {};

declare module "@mui/material/styles" {
  // Update types for breakpoints
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    large: true;
  }
  // Update types for the palette
  interface RedPaletteColorOptions {
    red?: string;
    redSecondary?: string;
    redLogo?: string;
    darkRed?: string;
  }
  interface RedPaletteColor {
    red: string;
    redSecondary: string;
    redLogo: string;
    darkRed: string;
  }
  interface MainPaletteColorOptions {
    white?: string;
    black?: string;
  }
  interface MainPaletteColor {
    white: string;
    black: string;
  }
  interface GrayPaletteColorOptions {
    gray?: string;
    graySecondary?: string;
    lightGray?: string;
    grayUnavailable?: string;
    grayUnavailableSecondary?: string;
    grayText?: string;
    blueGray?: string;
  }
  interface GrayPaletteColor {
    gray: string;
    graySecondary: string;
    lightGray: string;
    grayUnavailable: string;
    grayUnavailableSecondary: string;
    grayText: string;
    blueGray: string;
  }

  interface PaletteOptions {
    redPalette: RedPaletteColorOptions;
    mainPalette: MainPaletteColorOptions;
    grayPalette: GrayPaletteColorOptions;
  }
  interface Palette {
    redPalette: RedPaletteColor;
    mainPalette: MainPaletteColor;
    grayPalette: GrayPaletteColor;
  }

  // Update typography types
  interface TypographyVariants {
    titleMain: React.CSSProperties;
    tileSecondary: React.CSSProperties;
    titleSmall: React.CSSProperties;
    textMain: React.CSSProperties;
    textSecondary: React.CSSProperties;
    textSmall : React.CSSProperties;
    textSmallBold : React.CSSProperties;
    textSmallSecondary: React.CSSProperties;
    textSmallSecondaryBold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    titleMain?: React.CSSProperties;
    tileSecondary?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    textMain?: React.CSSProperties;
    textSecondary?: React.CSSProperties;
    textSmall ?: React.CSSProperties;
    textSmallBold ?: React.CSSProperties;
    textSmallSecondary?: React.CSSProperties;
    textSmallSecondaryBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleMain: true;
    tileSecondary: true;
    titleSmall: true;
    textMain: true;
    textSecondary: true;
    textSmall: true;
    textSmallBold: true;
    textSmallSecondary: true;
    textSmallSecondaryBold: true;
  }
}
