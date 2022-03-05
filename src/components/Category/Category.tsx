import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { useAppDispatch } from "../../hooks";
import { removeCategory } from "../../store/slices/categorySlice";
import { ICategory } from "../../types";

interface ICategoryState {
  category: ICategory;
  index: number;
  openEditForm: (state) => void;
  defaultOpenValue: object;
}

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "10px 10px 0",
    },
  })
);

export const Category: FC<ICategoryState> = ({
  category,
  index,
  openEditForm,
  defaultOpenValue,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const deleteCategory = (category: ICategory) => {
    dispatch(removeCategory(category.id));
  };

  const openOrCloseEditForm = () => {
    openEditForm({
      ...defaultOpenValue,
      [category.id]: false,
    });
  };

  return (
    <Box className={classes.container}>
      <Typography>{category.label}</Typography>
      <Box>
        <IconButton
          aria-label="edit"
          onClick={openOrCloseEditForm}
          disabled={!index}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => deleteCategory(category)}
          disabled={!index}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
