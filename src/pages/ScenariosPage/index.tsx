import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface ScenariosPageProps {}

const ScenariosPage: FC<ScenariosPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default ScenariosPage;
