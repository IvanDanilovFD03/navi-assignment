import React, { FC } from "react";

import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import { TrainerCardsList } from "../TrainerCardsList";

import { styles } from "./styles";

import { DUMMY_TRAINING_CARDS_DATA } from "modules/ProceduralTrainer/constants";
import {
  getDayName,
  getDayOfMonth,
  getMonthName,
} from "modules/ProceduralTrainer/helpers";

export interface ProceduralTrainerSectionProps {}

export const ProceduralTrainerSection: FC<ProceduralTrainerSectionProps> =
  React.memo(() => {
    const date = new Date();

    const formattedDate = `${getDayName(date).toUpperCase()}, ${getMonthName(
      date
    )} ${getDayOfMonth(date)}`;

    return (
      <Box sx={styles.root}>
        <Typography sx={styles.subtitle} variant="titleSmall">
          {formattedDate}
        </Typography>
        <Typography sx={styles.title} variant="h6">
          Procedural Trainer
        </Typography>
        <TrainerCardsList cardsList={DUMMY_TRAINING_CARDS_DATA} />
      </Box>
    );
  });
