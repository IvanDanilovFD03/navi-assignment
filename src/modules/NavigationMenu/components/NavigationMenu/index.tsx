import React, { FC, useEffect, useState } from "react";

import { ClickAwayListener } from "@mui/material";
import { Box } from "UI/Box";
import { IconButton } from "UI/IconButton";
import { CrossIcon } from "icons/CrossIcon";
import { navigationMenuList } from "modules/NavigationMenu/constants";
import { LogOutButton } from "../LogOutButton";
import { MenuButton } from "../MenuButton";
import { NavigationList } from "../NavigationList";

import { styles } from "./styles";

import { useBreakpoints } from "hooks/useBreakpoints";
import useNavigationMenuStore from "modules/NavigationMenu/store";
import { useNavigate } from "react-router-dom";

export interface NavigationMenuProps {}

export const NavigationMenu: FC<NavigationMenuProps> = React.memo(() => {
  const { openMenu, setOpenMenu } = useNavigationMenuStore((state) => state);

  const { isUpLaptop } = useBreakpoints();
  const navigate = useNavigate();

  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (openMenu) {
      timer = setTimeout(() => {
        setIsListVisible(true);
      }, 400);
    } else {
      setIsListVisible(false);
    }
    return () => clearTimeout(timer);
  }, [openMenu]);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Box sx={openMenu ? styles.openRoot : styles.root}>
      {openMenu && <Box sx={styles.blackBackground}></Box>}
      <Box sx={openMenu ? styles.openRoot : styles.root}>
        {openMenu && (
          <IconButton sx={styles.closeIconButton} onClick={handleCloseMenu}>
            <CrossIcon sx={styles.closeIcon} />
          </IconButton>
        )}
        <Box
          sx={
            openMenu
              ? styles.openMenuButtonContainer
              : styles.menuButtonContainer
          }
        >
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </Box>
        {openMenu && (
          <ClickAwayListener onClickAway={handleCloseMenu}>
            <Box
              sx={{
                ...styles.navigationListContainer,
                visibility: isListVisible ? "visible" : "hidden",
              }}
            >
              <NavigationList navigationList={navigationMenuList} />
              <LogOutButton />
            </Box>
          </ClickAwayListener>
        )}
      </Box>
    </Box>
  );
});
