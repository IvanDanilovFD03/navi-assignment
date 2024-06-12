import React, { FC } from "react";

import { Box } from "UI/Box";
import { TrainingScore } from "components/TrainingScore";
import Image from "mui-image";

import { styles } from "./styles";

import {
  pathImageSrc,
  pathLeftStyles,
  pathRightStyles,
  progressStepStyles,
} from "modules/ProceduralTrainerDetails/helpers";
import { ProceduralTrainerProgressType } from "types/api";

export interface ProceduresDetailsProgressProps {
  progress: ProceduralTrainerProgressType[];
  activeProcedureProgressId: string;
  setActiveProcedureProgressId: (value: string) => void;
}

export const ProceduresDetailsProgress: FC<ProceduresDetailsProgressProps> =
  React.memo(
    ({ progress, activeProcedureProgressId, setActiveProcedureProgressId }) => {
      const handleProgressClick = (id: string, lock: boolean) => {
        if (!lock) {
          setActiveProcedureProgressId(id);
        }
      };
      return (
        <Box sx={styles.root}>
          {progress.map(({ id, locked, ...rest }, index) => (
            <Box
              key={id}
              sx={progressStepStyles(locked, index % 2 === 0)}
              onClick={() => handleProgressClick(id, locked)}
            >
              <TrainingScore
                locked={locked}
                {...rest}
                active={activeProcedureProgressId === id}
              />
              {index !== progress.length - 1 && (
                <Box
                  sx={
                    index % 2 === 0
                      ? pathLeftStyles(locked)
                      : pathRightStyles(locked)
                  }
                >
                  <Image
                    src={pathImageSrc(locked, index % 2 === 0)}
                    duration={0}
                    fit="cover"
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      );
    }
  );
