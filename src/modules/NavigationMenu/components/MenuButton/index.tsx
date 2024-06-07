import React, { FC } from "react";

import { Box } from "UI/Box";
import LogoRed from "app/logo-red.png";
import MenuBlackIcon from "assets/icons/menu-black-icon.png";
import MenuWhiteIcon from "assets/icons/menu-white-icon.png";
import LogoWhite from "app/logo-white.png";
import Image from "mui-image";

import { styles } from "./styles";

export interface MenuButtonProps {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

export const MenuButton: FC<MenuButtonProps> = React.memo(
  ({ openMenu, setOpenMenu }) => {
    const handleMenuClick = () => {
      setOpenMenu(!openMenu);
    };

    return (
      <Box sx={styles.root} onClick={handleMenuClick}>
        <Box sx={styles.icon}>
          <Image
            src={openMenu ? MenuWhiteIcon : MenuBlackIcon}
            duration={0}
            fit="cover"
          />
        </Box>
        <Box sx={styles.logo}>
          <Image
            src={openMenu ? LogoWhite : LogoRed}
            duration={0}
            fit="cover"
          />
        </Box>
      </Box>
    );
  }
);
