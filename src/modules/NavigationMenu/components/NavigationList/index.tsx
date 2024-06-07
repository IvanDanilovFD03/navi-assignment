import React, { FC } from "react";

import { List } from "UI/List";
import { ListItem } from "UI/ListItem";
import { NavigationListItem } from "../NavigationListItem";

import { styles } from "./styles";

import { useLocation } from "react-router-dom";

export interface NavigationListProps {
  navigationList: {
    id: number;
    icon: string;
    route: string;
    title: string;
  }[];
}

export const NavigationList: FC<NavigationListProps> = React.memo(
  ({ navigationList }) => {
    const location = useLocation();
    const pathname = location.pathname.replace(/[-/]/g, " ");

    return (
      <List sx={styles.root}>
        {navigationList.map((item) => (
          <ListItem key={item.id} sx={styles.listItem}>
            <NavigationListItem
              {...item}
              active={pathname.includes(item.title) ? true : false}
            />
          </ListItem>
        ))}
      </List>
    );
  }
);
