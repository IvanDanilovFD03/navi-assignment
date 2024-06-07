import React, { FC } from "react";

import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import LogOutIcon from "assets/icons/logout-icon.png";
import Image from "mui-image";

import { styles } from "./styles";

import { useBreakpoints } from "hooks/useBreakpoints";

export interface LogOutButtonProps {}

export const LogOutButton: FC<LogOutButtonProps> = React.memo(({}) => {
  const { isUpLarge } = useBreakpoints();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.icon}>
        <Image src={LogOutIcon} duration={0} fit="cover" />
      </Box>
      <Typography
        variant={isUpLarge ? "titleSmall" : "textSmall"}
        color="mainPalette.white"
      >
        Logout
      </Typography>
    </Box>
  );
});
