import React, { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { ICategory, IEditCategoryFormInputProps } from "../../types";
import { fieldValidation } from "../../models/validationSchema";
import { ErrorMessage } from "../ErrorText/ErrorText";

interface IEditCategoryFormProps {
  category: ICategory;
  onEditFormSubmit: (data: IEditCategoryFormInputProps) => void;
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
  onEditFormSubmit,
}) => {
  const classes = useStyles();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IEditCategoryFormInputProps>({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onEditFormSubmit)}>
      <Box className={classes.container}>
        <TextField
          label="Label"
          variant="outlined"
          size="small"
          defaultValue={category.label}
          {...register("label", fieldValidation.labelInput)}
          autoFocus
        />
        <Button
          className={classes.btn}
          variant="contained"
          type="submit"
          disabled={!isValid}
        >
          Edit
        </Button>
      </Box>
      {errors?.label && (
        <ErrorMessage message={errors?.label?.message || "Error"} />
      )}
    </form>
  );
};
