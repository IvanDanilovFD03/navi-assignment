import React, { FC, useCallback, useEffect, useState } from "react";

import { Box } from "UI/Box";
import { ProceduresDetailsDescription } from "../ProceduresDetailsDescription";
import { ProceduresDetailsProgress } from "../ProceduresDetailsProgress";

import { styles } from "./styles";

import { DUMMY_PROGRESS_DATA } from "modules/ProceduralTrainerDetails/constants";
import { useParams } from "react-router-dom";
import {
  ProceduralTrainerProgressType,
  ProcedureType,
  ProceduresDetailsType,
} from "types/api";

export interface ProceduresDetailsSectionProps {}

export const ProceduresDetailsSection: FC<ProceduresDetailsSectionProps> =
  React.memo(() => {
    const { ProceduralTrainerId } = useParams();
    const allProcedures = DUMMY_PROGRESS_DATA;
    const [chosenProcedure, setChosenProcedure] = useState<ProcedureType>();
    const [procedureDetails, setProcedureDetails] =
      useState<ProceduresDetailsType>();
    const [procedureProgress, setProcedureProgress] = useState<
      ProceduralTrainerProgressType[]
    >([]);
    const [activeProcedureProgressId, setActiveProcedureProgressId] =
      useState<string>("");

    const findInfoById = useCallback(
      (id?: string) => {
        if (id) {
          const result = allProcedures.find((item) => item.id === id);
          return result;
        }
      },
      [allProcedures]
    );

    useEffect(() => {
      const chosenProcedure = findInfoById(ProceduralTrainerId);
      if (chosenProcedure) {
        setChosenProcedure(chosenProcedure);
        setActiveProcedureProgressId(chosenProcedure.progress[0].id);
        setProcedureProgress(chosenProcedure.progress);
      }
    }, [ProceduralTrainerId, findInfoById]);

    useEffect(() => {
      if (activeProcedureProgressId && chosenProcedure) {
        const result = chosenProcedure.progress.find(
          (item) => item.id === activeProcedureProgressId
        );
        setProcedureDetails(result);
      }
    }, [activeProcedureProgressId, chosenProcedure]);

    return (
      <Box sx={styles.root}>
        {procedureProgress && (
          <ProceduresDetailsProgress
            progress={procedureProgress}
            activeProcedureProgressId={activeProcedureProgressId}
            setActiveProcedureProgressId={setActiveProcedureProgressId}
          />
        )}
        {procedureDetails && (
          <ProceduresDetailsDescription {...procedureDetails} />
        )}
      </Box>
    );
  });
