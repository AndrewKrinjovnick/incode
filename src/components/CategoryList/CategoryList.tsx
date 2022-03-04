import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { AddCategoryButton } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeCategory } from "../../store/reducers/transactionReducer";

const useStyles = makeStyles(() =>
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

const CategoryList: FC = () => {
  const classes = useStyles();
  const categories = useAppSelector(
    (state) => state.transactions.allCategories
  );
  const dispatch = useAppDispatch();
  const deleteCategory = (id: string) => {
    dispatch(removeCategory(id));
  };

  return (
    <>
      <AddCategoryButton />
      {categories.map((category, index) => (
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

export default CategoryList;
