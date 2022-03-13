import React, { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";

export interface IErrorTextProps {
  message: string;
}

export const useStyles = makeStyles(() =>
  createStyles({
    error: {
      color: "red",
      fontSize: "12px",
      textAlign: "center",
    },
  })
);

export const ErrorMessage: FC<IErrorTextProps> = ({ message }) => {
  const classes = useStyles();
  return <p className={classes.error}>{message}</p>;
};
