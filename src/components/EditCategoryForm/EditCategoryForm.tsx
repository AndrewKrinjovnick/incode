import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ICategory, nameOfCategory } from "../../types";
import { updateCategory } from "../../store/slices/categorySlice";
import { useAppDispatch } from "../../hooks";

interface IEditCategoryFormProps {
  category: ICategory;
  onEditButtonClick: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      height: "50px",
      padding: "10px 5px",
      width: "100%",
      maxWidth: "250px",
    },
    btn: {
      height: "40px",
    },
  })
);

export const EditCategoryForm: FC<IEditCategoryFormProps> = ({
  category,
  onEditButtonClick,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [categoryLabel, setCategoryLabel] = useState<nameOfCategory>(
    category.label
  );

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryLabel(event.target.value);
  };

  const editCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category.label.trim() && category.label.length < 15) {
      dispatch(updateCategory({ ...category, label: categoryLabel }));
    }
    onEditButtonClick();
  };

  return (
    <form onSubmit={editCategory} className={classes.container}>
      <TextField
        label="Label"
        variant="outlined"
        size="small"
        value={categoryLabel}
        onChange={setInputValue}
        autoFocus
      />
      <Button className={classes.btn} variant="contained" type="submit">
        Edit
      </Button>
    </form>
  );
};
