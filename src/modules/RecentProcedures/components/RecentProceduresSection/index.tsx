import React, { FC } from "react";

import { Box } from "UI/Box";
import { Typography } from "UI/Typography";
import { RecentProceduresCardsList } from "../RecentProceduresCardsList";

import { styles } from "./styles";

import { DUMMY_RECENT_CARDS_DATA } from "modules/RecentProcedures/constants";

export interface RecentProceduresSectionProps {}

export const RecentProceduresSection: FC<RecentProceduresSectionProps> =
  React.memo(() => {
    return (
      <Box sx={styles.root}>
        <Typography sx={styles.title}>Recent procedures</Typography>
        <RecentProceduresCardsList cardsList={DUMMY_RECENT_CARDS_DATA} />
      </Box>
    );
  });
