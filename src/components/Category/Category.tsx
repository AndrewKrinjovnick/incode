import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { useAppDispatch } from "../../hooks";
import { removeCategory } from "../../store/slices/categorySlice";
import { ICategory } from "../../types";

export interface ICategoryProps {
  category: ICategory;
  disableButtons: boolean;
  onEditButtonClick: () => void;
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
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const deleteCategory = (category: ICategory) => {
    dispatch(removeCategory(category.id));
  };
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
          onClick={() => deleteCategory(category)}
          disabled={disableButtons}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
