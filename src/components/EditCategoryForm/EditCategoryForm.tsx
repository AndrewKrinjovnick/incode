import React, { FC } from "react";
import { Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ICategory, nameOfCategory, IСategoryIDObject } from "../../types";
import { updateCategory } from "../../store/slices/categorySlice";
import { useAppDispatch } from "../../hooks";
import { updateTransactions } from "../../store/slices/transactionSlice";
import { useInputState } from "../../hooks/useInputState";

interface IEditCategoryFormProps {
  category: ICategory;
  closeEditForm: (state: IСategoryIDObject) => void;
  defaultOpenValue: IСategoryIDObject;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      height: "50px",
      padding: "10px 0",
    },
    btn: {
      height: "40px",
    },
  })
);

export const EditCategoryForm: FC<IEditCategoryFormProps> = ({
  category,
  closeEditForm,
  defaultOpenValue,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [categoryLabel, setCategoryHandler] = useInputState<
    nameOfCategory,
    React.ChangeEvent<HTMLInputElement>
  >(category.label);

  const editCategory = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <form onSubmit={editCategory} className={classes.container}>
      <TextField
        label="Label"
        variant="outlined"
        size="small"
        value={categoryLabel}
        onChange={setCategoryHandler}
        autoFocus
      />
      <Button className={classes.btn} variant="contained" type="submit">
        Edit
      </Button>
    </form>
  );
};
