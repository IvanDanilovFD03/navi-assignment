import React, { FC } from "react";

import { Link } from "react-router-dom";
import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import Image from "mui-image";

import { SxProps } from "@mui/material";
import { styles } from "./styles";

import { useBreakpoints } from "hooks/useBreakpoints";
import useNavigationMenuStore from "modules/NavigationMenu/store";

export interface NavigationListItemProps {
  id: number;
  icon: string;
  route: string;
  title: string;
  active: boolean;
}

export const NavigationListItem: FC<NavigationListItemProps> = React.memo(
  ({ id, icon, route, title, active }) => {
    const { isUpLarge } = useBreakpoints();
    const { setOpenMenu } = useNavigationMenuStore((state) => state);

    const listItemStyle = (active: boolean): SxProps => {
      if (active) {
        return {
          ...styles.listItem,
          ...styles.activeListItem,
        } as SxProps;
      } else {
        return styles.listItem;
      }
    };
    return (
      <Box sx={styles.root}>
        <Link to={route} onClick={() => setOpenMenu(false)}>
          <Box sx={listItemStyle(active)}>
            {active ? (
              <Box sx={styles.icon}>
                <Image src={icon} duration={0} fit="contain" />
              </Box>
            ) : (
              <Box sx={styles.iconPlaceholder}></Box>
            )}

            <Typography
              variant={isUpLarge ? "titleSmall" : "textSmall"}
              color={active ? "redPalette.red" : "mainPalette.white"}
              sx={styles.title}
            >
              {title}
            </Typography>
          </Box>
        </Link>
      </Box>
    );
  }
);
