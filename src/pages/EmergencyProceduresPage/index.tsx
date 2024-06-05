import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface EmergencyProceduresPageProps {}

const EmergencyProceduresPage: FC<EmergencyProceduresPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default EmergencyProceduresPage;
