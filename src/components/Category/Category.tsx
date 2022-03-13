import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { ICategory } from "../../types";

export interface ICategoryProps {
  category: ICategory;
  disableButtons: boolean;
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "10px 10px 0",
      maxWidth: "250px",
    },
  })
);

export const Category: FC<ICategoryProps> = ({
  category,
  disableButtons,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography>{category.label}</Typography>
      <Box>
        <IconButton
          aria-label="edit"
          onClick={onEditButtonClick}
          disabled={disableButtons}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={onDeleteButtonClick}
          disabled={disableButtons}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
