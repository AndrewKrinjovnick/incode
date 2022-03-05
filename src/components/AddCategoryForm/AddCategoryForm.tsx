import React, { FC, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../hooks";
import { addCategory } from "../../store/slices/categorySlice";

const useStyles = makeStyles(() =>
  createStyles({
    categoryInput: {
      width: "100%",
      margin: "5px 0 10px!important",
    },
  })
);

export const AddCategoryForm: FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState<string>("");
  const dispatch = useAppDispatch();

  const addCategoryHandler = (event) => {
    event.preventDefault();
    if (category.trim() && category.length < 15) {
      dispatch(addCategory({ id: uuidv4(), label: category }));
      setCategory("");
    } else {
      setCategory("");
    }
  };

  const setСategoryName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setCategory(value);
  };

  return (
    <form onSubmit={addCategoryHandler}>
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        label="Category"
        variant="outlined"
        className={classes.categoryInput}
        value={category}
        onChange={setСategoryName}
      />
      <Button variant="contained" fullWidth type="submit">
        Add category
      </Button>
    </form>
  );
};
