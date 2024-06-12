import { SxProps } from "@mui/material";
import PathLeftIUnlocked from "assets/icons/dotted-path-left-unlocked.png";
import PathLeft from "assets/icons/dotted-path-left.png";
import PathRightIUnlocked from "assets/icons/dotted-path-right-unlocked.png";
import PathRight from "assets/icons/dotted-path-right.png";
import { styles } from "../components/ProceduresDetailsProgress/styles";

export const pathLeftStyles = (locked: boolean) => {
  if (locked) {
    return {
      ...styles.path,
      ...styles.lockedPathLeft,
    } as SxProps;
  }
  return {
    ...styles.path,
    ...styles.pathLeft,
  } as SxProps;
};

export const pathRightStyles = (locked: boolean) => {
  if (locked) {
    return {
      ...styles.path,
      ...styles.lockedPathRight,
    } as SxProps;
  }
  return {
    ...styles.path,
    ...styles.pathRight,
  } as SxProps;
};

export const pathImageSrc = (locked: boolean, left: boolean) => {
  if (locked) {
    if (left) {
      return PathLeft;
    } else {
      return PathRight;
    }
  } else {
    if (left) {
      return PathLeftIUnlocked;
    } else {
      return PathRightIUnlocked;
    }
  }
};

export const progressStepStyles = (locked: boolean, left: boolean) => {
  if (left) {
    return locked
      ? ({ ...styles.leftStep, ...styles.lockedStep } as SxProps)
      : styles.leftStep;
  } else {
    return locked
      ? ({ ...styles.rightStep, ...styles.lockedStep } as SxProps)
      : styles.rightStep;
  }
};
