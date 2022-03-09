import React, { FC, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { v4 as generateID } from "uuid";
import { useAppDispatch } from "../../hooks";
import { addCategory } from "../../store/slices/categorySlice";
import { nameOfCategory } from "../../types";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: "250px",
    },
    categoryInput: {
      width: "100%",
      margin: "5px 0 10px!important",
    },
  })
);

export const AddCategoryForm: FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState<nameOfCategory>("");

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const dispatch = useAppDispatch();

  const addCategoryHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category.trim() && category.length < 15) {
      dispatch(addCategory({ id: generateID(), label: category }));
    }
    setCategory("");
  };

  return (
    <form onSubmit={addCategoryHandler} className={classes.container}>
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        label="Category"
        variant="outlined"
        className={classes.categoryInput}
        value={category}
        onChange={setInputValue}
      />
      <Button variant="contained" fullWidth type="submit">
        Add category
      </Button>
    </form>
  );
};
