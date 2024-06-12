import React, { FC } from "react";

import { List } from "UI/List";
import { ListItem } from "UI/ListItem";
import { TrainingCard } from "components/TrainingCard";
import { Link } from "react-router-dom";

import { ProceduralTrainerCardType } from "types/api";

import { styles } from "./styles";

export interface TrainerCardsListProps {
  cardsList: ProceduralTrainerCardType[];
}

export const TrainerCardsList: FC<TrainerCardsListProps> = React.memo(
  ({ cardsList }) => {
    return (
      <List sx={styles.root}>
        {cardsList.map(({ id, ...rest }) => (
          <ListItem key={id} sx={styles.listItem}>
            <Link to={`/My-Account/${id}`}>
              <TrainingCard id={id} {...rest} />
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
);
