import { styles } from "./styles";

import { IconSize } from "types/styles";

export const getIconSizeStyles = (size: IconSize) => {
  switch (size) {
    case "lg": {
      return styles.large;
    }
    case "sm": {
      return styles.small;
    }
    case "xl": {
      return styles.huge;
    }
    default: {
      return styles.medium;
    }
  }
};
