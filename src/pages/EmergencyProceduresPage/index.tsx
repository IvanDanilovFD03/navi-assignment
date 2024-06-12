import { FC } from "react";

import { Container } from "UI/Container";
import { Typography } from "UI/Typography";

import { styles } from "./styles";

interface EmergencyProceduresPageProps {}

const EmergencyProceduresPage: FC<EmergencyProceduresPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <Typography>Emergency Procedures Page</Typography>
    </Container>
  );
};

export default EmergencyProceduresPage;
