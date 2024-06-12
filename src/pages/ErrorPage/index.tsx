import { FC } from "react";

import { Container } from "UI/Container";
import { Typography } from "UI/Typography";

import { styles } from "./styles";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <Container sx={styles.root}>
      <Typography>Oops! Page not found</Typography>
    </Container>
  );
};

export default ErrorPage;
