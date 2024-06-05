import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface ProceduralTrainerPageProps {}

const ProceduralTrainerPage: FC<ProceduralTrainerPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default ProceduralTrainerPage;
