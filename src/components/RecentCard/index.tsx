import { FC } from "react";

import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import FilledStar from "assets/icons/star-filled-white-icon.png";
import WhiteStar from "assets/icons/star-white-icon.png";
import Image from "mui-image";

import { styles } from "./styles";

import { RecentProceduresCardType } from "types/api";

export interface RecentCardProps extends RecentProceduresCardType {}

export const RecentCard: FC<RecentProceduresCardType> = ({
  title,
  subtitle,
  stars,
}) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconsContainer}>
        {Array.from({ length: stars }).map((_, index) => (
          <Box sx={styles.icon} key={index}>
            <Image src={FilledStar} duration={0} fit="contain" />
          </Box>
        ))}
        {Array.from({ length: 3 - stars }).map((_, index) => (
          <Box sx={styles.icon} key={index}>
            <Image src={WhiteStar} duration={0} fit="contain" />
          </Box>
        ))}
      </Box>
      <Typography
        sx={styles.title}
        color="mainPalette.white"
        variant="textMain"
      >
        {title}
      </Typography>
      <Typography
        sx={styles.subtitle}
        color="mainPalette.white"
        variant="textSecondary"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
