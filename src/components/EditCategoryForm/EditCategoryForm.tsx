import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ICategory, nameOfCategory } from "../../types";
import { updateCategory } from "../../store/slices/categorySlice";
import { useAppDispatch } from "../../hooks";
import { updateTransactions } from "../../store/slices/transactionSlice";

interface IEditCategoryForm {
  category: ICategory;
  closeEditForm: (state) => void;
  defaultOpenValue: object;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export const EditCategoryForm: FC<IEditCategoryForm> = ({
  category,
  closeEditForm,
  defaultOpenValue,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [categoryLabel, setCategoryLabel] = useState<nameOfCategory>(
    category.label
  );
  const editCategory = (event) => {
    event.preventDefault();
    if (category.label.trim() && category.label.length < 15) {
      dispatch(updateCategory({ ...category, label: categoryLabel }));
      dispatch(
        updateTransactions({
          nameBefore: category.label,
          nameAfter: categoryLabel,
        })
      );
      closeEditForm(defaultOpenValue);
    }
  };

  const setСategoryName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setCategoryLabel(value);
  };

  return (
    <form onSubmit={editCategory} className={classes.container}>
      <TextField
        label="Label"
        variant="outlined"
        value={categoryLabel}
        onChange={setСategoryName}
      />
      <Button variant="contained" type="submit">
        Edit
      </Button>
    </form>
  );
};
