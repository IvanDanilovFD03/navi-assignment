import React, { FC } from "react";

import { Box } from "UI/Box";
import { List } from "UI/List";
import { ListItem } from "UI/ListItem";

import { styles } from "./styles";
import { ProceduralTrainerCardType } from "types/api";
import { TrainingCard } from "components/TrainingCard";

export interface TrainerCardsListProps {
  cardsList: ProceduralTrainerCardType[];
}

export const TrainerCardsList: FC<TrainerCardsListProps> = React.memo(
  ({ cardsList }) => {
    return (
      <List sx={styles.root}>
        {cardsList.map(({ id, ...rest }) => (
          <ListItem key={id} sx={styles.listItem}>
            <TrainingCard id={id} {...rest} />
          </ListItem>
        ))}
      </List>
    );
  }
);
