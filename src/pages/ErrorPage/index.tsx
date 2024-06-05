import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default ErrorPage;
