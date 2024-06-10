import React, { FC } from "react";

import { List } from "UI/List";
import { ListItem } from "UI/ListItem";
import { RecentCard } from "components/RecentCard";

import { styles } from "./styles";

import { RecentProceduresCardType } from "types/api";

export interface RecentProceduresCardsListProps {
  cardsList: RecentProceduresCardType[];
}

export const RecentProceduresCardsList: FC<RecentProceduresCardsListProps> =
  React.memo(({ cardsList }) => {
    return (
      <List sx={styles.root}>
        {cardsList.map(({ id, ...rest }) => (
          <ListItem key={id} sx={styles.listItem}>
            <RecentCard id={id} {...rest} />
          </ListItem>
        ))}
      </List>
    );
  });
