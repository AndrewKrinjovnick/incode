import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { removeCategory } from "../../store/slices/categorySlice";

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

export const CategoryList: FC = () => {
  const classes = useStyles();
  const { allCategories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  const deleteCategory = (id: string) => {
    dispatch(removeCategory(id));
  };

  return (
    <>
      <AddCategoryForm />
      {allCategories.map((category, index) => (
        <div key={category.label} className={classes.container}>
          <Typography>{category.label}</Typography>
          <IconButton
            aria-label="delete"
            onClick={() => deleteCategory(category.id)}
            disabled={!index}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </>
  );
};
