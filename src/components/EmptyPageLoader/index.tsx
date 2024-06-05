import { FC } from "react";

import { CircularProgress } from "UI/CircularProgress";
import { Container } from "UI/Container";

import { styles } from "./styles";

export interface EmptyPageLoaderProps {}

export const EmptyPageLoader: FC<EmptyPageLoaderProps> = () => {
  return (
    <Container sx={styles.root}>
      <CircularProgress sx={styles.loader} />
    </Container>
  );
};
