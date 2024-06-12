import { FC } from "react";

import { Container } from "UI/Container";
import { Typography } from "UI/Typography";

import { styles } from "./styles";

interface ScenariosPageProps {}

const ScenariosPage: FC<ScenariosPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <Typography>Scenarios Page</Typography>
    </Container>
  );
};

export default ScenariosPage;
