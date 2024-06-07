import React, { FC, useState } from "react";

import { Box } from "UI/Box";
import { navigationMenuList } from "modules/NavigationMenu/constants";
import { LogOutButton } from "../LogOutButton";
import { MenuButton } from "../MenuButton";
import { NavigationList } from "../NavigationList";

import { styles } from "./styles";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useNavigate } from "react-router-dom";
import useNavigationMenuStore from "modules/NavigationMenu/store";

export interface NavigationMenuProps {}

export const NavigationMenu: FC<NavigationMenuProps> = React.memo(() => {
  const { openMenu, setOpenMenu } = useNavigationMenuStore((state) => state);

  const { isUpLaptop } = useBreakpoints();
  const navigate = useNavigate();

  return (
    <Box sx={openMenu ? styles.openRoot : styles.root}>
      <Box
        sx={
          openMenu ? styles.openMenuButtonContainer : styles.menuButtonContainer
        }
      >
        <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </Box>
      {openMenu && (
        <Box sx={styles.navigationListContainer}>
          <NavigationList navigationList={navigationMenuList} />
          <LogOutButton />
        </Box>
      )}
    </Box>
  );
});
