import { FC } from "react";

import { Container } from "UI/Container";
import { ProceduresDetailsSection } from "modules/ProceduralTrainerDetails";

import { styles } from "./styles";

interface ProceduralTrainerPageProps {}

const ProceduralTrainerPage: FC<ProceduralTrainerPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <ProceduresDetailsSection />
    </Container>
  );
};

export default ProceduralTrainerPage;
