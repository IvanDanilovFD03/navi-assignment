import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface CFIPageProps {}

const CFIPage: FC<CFIPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default CFIPage;
