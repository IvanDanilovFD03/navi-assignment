import { FC } from "react";

import { Box } from "UI/Box";
import { IconButton } from "UI/IconButton";
import { Typography } from "UI/Typography";
import SendIcon from "assets/icons/send-icon.png";
import StarIcon from "assets/icons/star-filled-black-icon.png";
import Image from "mui-image";

import { styles } from "./styles";

import { ProceduralTrainerCardType } from "types/api";

export interface TrainingCardProps extends ProceduralTrainerCardType {}

export const TrainingCard: FC<TrainingCardProps> = ({
  percentage,
  title,
  subtitle,
  image,
}) => {
  return (
    <Box
      sx={{
        ...styles.root,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Typography sx={styles.percentage} color="mainPalette.white" variant="h1">
        {percentage}%
      </Typography>
      <Typography
        sx={styles.title}
        color="mainPalette.white"
        variant="tileSecondary"
      >
        {title}
      </Typography>
      <Typography
        sx={styles.subtitle}
        color="mainPalette.white"
        variant="textSmall"
      >
        {subtitle}
      </Typography>
      <Box sx={styles.buttonsContainer}>
        <IconButton sx={styles.button}>
          <Image src={SendIcon} duration={0} fit="cover" />
        </IconButton>
        <IconButton sx={styles.button}>
          <Image src={StarIcon} duration={0} fit="cover" />
        </IconButton>
      </Box>
    </Box>
  );
};
