import React, { FC } from "react";

import { Box } from "UI/Box";
import { Button } from "UI/Button";
import { Typography } from "UI/Typography";
import Image from "mui-image";
import FilledRedStar from "assets/icons/star-filled-red-icon.png";
import FilledGrayStar from "assets/icons/star-filled-gray-icon.png";

import { styles } from "./styles";

import { useNavigate } from "react-router-dom";

export interface ProceduresDetailsDescriptionProps {
  stars: number;
  percentage: number;
  title: string;
  subtitle: string;
  description: string;
  // route: string;
}

export const ProceduresDetailsDescription: FC<ProceduresDetailsDescriptionProps> =
  React.memo(({ stars, percentage, title, subtitle, description }) => {
    const navigate = useNavigate();

    // const handleStartButtonClick = () => {
    //   navigate(route);
    // };

    return (
      <Box sx={styles.root}>
        <Box sx={styles.starsContainer}>
          <Box sx={styles.iconsContainer}>
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
          </Box>
          <Typography variant="textSmall">{percentage}%</Typography>
        </Box>
        <Typography variant="textMain" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="textSecondary">{subtitle}</Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: description }}
          sx={styles.description}
        ></Box>
        <Button sx={styles.button}>
          <Typography
            sx={styles.buttonTitle}
            color="mainPalette.white"
            variant="textSmallBold"
          >
            Start
          </Typography>
        </Button>
      </Box>
    );
  });
