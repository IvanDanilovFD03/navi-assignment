import React, { FC } from "react";

import { Box } from "UI/Box";
import LogoRed from "app/logo-red.png";
import LogoWhite from "app/logo-white.png";
import MenuBlackIcon from "assets/icons/menu-black-icon.png";
import MenuWhiteIcon from "assets/icons/menu-white-icon.png";
import Image from "mui-image";

import { useNavigate } from "react-router-dom";

import { styles } from "./styles";

export interface MenuButtonProps {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

export const MenuButton: FC<MenuButtonProps> = React.memo(
  ({ openMenu, setOpenMenu }) => {
    const navigate = useNavigate();
    const handleMenuOpenClick = () => {
      setOpenMenu(!openMenu);
    };

    const handleLogoClick = () => {
      navigate("/");
    };

    return (
      <Box sx={styles.root}>
        <Box sx={styles.icon} onClick={handleMenuOpenClick}>
          <Image
            src={openMenu ? MenuWhiteIcon : MenuBlackIcon}
            duration={0}
            fit="cover"
          />
        </Box>
        <Box sx={styles.logo} onClick={handleLogoClick}>
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
