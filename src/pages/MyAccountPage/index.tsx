import { FC } from "react";

import { Container } from "UI/Container";
import { ProceduralTrainerSection } from "modules/ProceduralTrainer";
import { RecentProceduresSection } from "modules/RecentProcedures";

import { styles } from "./styles";

interface MyAccountPageProps {}

const MyAccountPage: FC<MyAccountPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <ProceduralTrainerSection />
      <RecentProceduresSection />
    </Container>
  );
};

export default MyAccountPage;
