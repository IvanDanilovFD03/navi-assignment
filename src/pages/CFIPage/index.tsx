import { FC } from "react";

import { Container } from "UI/Container";
import { Typography } from "UI/Typography";

import { styles } from "./styles";

interface CFIPageProps {}

const CFIPage: FC<CFIPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <Typography>CFI Page</Typography>
    </Container>
  );
};

export default CFIPage;
