import { FC } from "react";

import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import LockImage from "assets/icons/lock-icon.png";
import FilledGrayStar from "assets/icons/star-filled-gray-icon.png";
import FilledRedStar from "assets/icons/star-filled-red-icon.png";
import { ProgressCircleBar } from "components/ProgressCircleBar";
import Image from "mui-image";

import { SxProps } from "@mui/material";
import { styles } from "./styles";

export interface TrainingScoreProps {
  locked: boolean;
  stars: number;
  percentage: number;
  title: string;
  subtitle: string;
  active: boolean;
}

export const TrainingScore: FC<TrainingScoreProps> = ({
  locked,
  stars,
  percentage,
  title,
  subtitle,
  active,
}) => {
  const circleStyles = (locked: boolean) => {
    if (locked) {
      return {
        ...styles.circle,
        ...styles.lockedCircle,
      } as SxProps;
    }
    return styles.circle;
  };

  const iconsContainerStyles = (locked: boolean) => {
    if (locked) {
      return {
        ...styles.iconsContainer,
        ...styles.lockedIconsContainer,
      } as SxProps;
    }
    return styles.iconsContainer;
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.circleContainer}>
        {active && (
          <Box sx={styles.activeTag}>
            <Typography
              variant="textSmallSecondaryBold"
              color="mainPalette.white"
            >
              Start
            </Typography>
          </Box>
        )}
        {!locked && <ProgressCircleBar percentage={percentage} />}
        <Box sx={circleStyles(locked)}>
          {locked && (
            <Box sx={styles.lockIcon}>
              <Image src={LockImage} duration={0} fit="contain" />
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={iconsContainerStyles(locked)}>
        {locked ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box sx={styles.icon} key={index}>
                <Image src={FilledGrayStar} duration={0} fit="contain" />
              </Box>
            ))}
          </>
        ) : (
          <>
            {Array.from({ length: stars }).map((_, index) => (
              <Box sx={styles.icon} key={index}>
                <Image src={FilledRedStar} duration={0} fit="contain" />
              </Box>
            ))}
            {Array.from({ length: 3 - stars }).map((_, index) => (
              <Box sx={styles.icon} key={index}>
                <Image src={FilledGrayStar} duration={0} fit="contain" />
              </Box>
            ))}
          </>
        )}
      </Box>
      <Typography
        variant="textSmallSecondaryBold"
        color={locked ? "grayPalette.gray" : "mainPalette.black"}
      >
        {title}
      </Typography>
      <Typography
        variant="textSmallSecondary"
        color={locked ? "grayPalette.gray" : "mainPalette.black"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
