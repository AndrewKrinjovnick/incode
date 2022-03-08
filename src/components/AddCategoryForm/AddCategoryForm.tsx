import React, { FC } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { v4 as generateID } from "uuid";
import { useAppDispatch } from "../../hooks";
import { addCategory } from "../../store/slices/categorySlice";
import { useInputState } from "../../hooks/useInputState";

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
  const [category, setCategoryHandler, setCategory] = useInputState<
    string,
    React.ChangeEvent<HTMLInputElement>
  >("");
  const dispatch = useAppDispatch();

  const addCategoryHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category.trim() && category.length < 15) {
      dispatch(addCategory({ id: generateID(), label: category }));
    }
    setCategory("");
  };

  return (
    <form onSubmit={addCategoryHandler} name="reset">
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        label="Category"
        variant="outlined"
        className={classes.categoryInput}
        value={category}
        onChange={setCategoryHandler}
      />
      <Button variant="contained" fullWidth type="submit">
        Add category
      </Button>
    </form>
  );
};
