import React, { FC, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../hooks";
import { addCategory } from "../../store/reducers/transactionReducer";

const useStyles = makeStyles(() =>
  createStyles({
    categoryInput: {
      width: "100%",
      margin: "5px 0 10px!important",
    },
  })
);

const AddCategoryButton: FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState<string>("");
  const dispatch = useAppDispatch();

  const addCategoryHandler = () => {
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

  const enterCategory = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      addCategoryHandler();
    }
  };

  return (
    <Box>
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        label="Category"
        variant="outlined"
        className={classes.categoryInput}
        value={category}
        onChange={setСategoryName}
        onKeyDown={enterCategory}
      />
      <Button variant="contained" fullWidth onClick={addCategoryHandler}>
        Add category
      </Button>
    </Box>
  );
};

export default AddCategoryButton;
