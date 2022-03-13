import React, { FC } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { v4 as generateID } from "uuid";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { addCategory } from "../../store/slices/categorySlice";
import { fieldValidation } from "../../models/validationSchema";
import { ErrorMessage } from "../ErrorText/ErrorText";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: "250px",
    },
    categoryInput: {
      width: "100%",
      marginTop: "5px!important",
    },
    button: {
      marginTop: "10px!important",
    },
  })
);

interface IAddCategoryFormInputProps {
  category: string;
}

export const AddCategoryForm: FC = () => {
  const classes = useStyles();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IAddCategoryFormInputProps>({ mode: "onChange" });

  const dispatch = useAppDispatch();

  const addCategoryHandler = (data: IAddCategoryFormInputProps) => {
    dispatch(addCategory({ id: generateID(), label: data.category }));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(addCategoryHandler)}
      className={classes.container}
    >
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        className={classes.categoryInput}
        label="Category"
        variant="outlined"
        {...register("category", fieldValidation.labelInput)}
      />
      {errors?.category && (
        <ErrorMessage message={errors?.category?.message || "Error"} />
      )}
      <Button
        className={classes.button}
        variant="contained"
        fullWidth
        type="submit"
        disabled={!isValid}
      >
        Add category
      </Button>
    </form>
  );
};
