import { FC } from "react";

import { Box } from "UI/Box";

import { basicTheme } from "theme";
import { styles } from "./styles";

export interface ProgressCircleBarProps {
  percentage: number;
  backgroundColor?: string;
  progressColor?: string;
  progressBackgroundColor?: string;
}

export const ProgressCircleBar: FC<ProgressCircleBarProps> = ({
  percentage,
  backgroundColor = basicTheme.palette.grayPalette.graySecondary,
  progressColor = basicTheme.palette.redPalette.red,
  progressBackgroundColor = basicTheme.palette.grayPalette.grayUnavailable,
}) => {
  const progressBarStyles = (
    percentage: number,
    backgroundColor: string,
    progressColor: string,
    progressBackgroundColor: string
  ) => {
    return {
      ...styles.progressBar,
      background: `radial-gradient(
        closest-side,
        ${backgroundColor} 90%,
        transparent 80% 100%
      ), conic-gradient(${progressColor} calc(${percentage} * 1%), ${progressBackgroundColor} 0)`,
    };
  };

  return (
    <Box sx={styles.root}>
      <Box
        sx={progressBarStyles(
          percentage,
          backgroundColor,
          progressColor,
          progressBackgroundColor
        )}
      ></Box>
    </Box>
  );
};
