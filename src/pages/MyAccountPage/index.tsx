import { FC } from "react";

import { Container } from "UI/Container";

import { styles } from "./styles";

interface MyAccountPageProps {}

const MyAccountPage: FC<MyAccountPageProps> = () => {
  return <Container sx={styles.root}></Container>;
};

export default MyAccountPage;
