import React, { FC } from "react";
import { Button, TextField, Typography, MenuItem } from "@mui/material";
import { v4 as generateID } from "uuid";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTransaction } from "../../store/slices/transactionSlice";
import { ErrorMessage } from "../ErrorText/ErrorText";
import { fieldValidation } from "../../models/validationSchema";

const useStyles = makeStyles(() =>
  createStyles({
    formWrapper: {
      width: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      width: "100%",
      padding: "5px 0 10px",
    },
    select: {
      width: "150px",
    },
    btn: {
      width: "100px",
      height: "56px",
    },
  })
);

interface ITransactionFormInputProps {
  label: string;
  date: string;
  amount: string;
  category: string;
}

const date = new Date().toISOString().slice(0, 10);

export const TransactionForm: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { allCategories } = useAppSelector((state) => state.categories);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<ITransactionFormInputProps>({ mode: "onChange" });

  const addNewTransaction = (data: ITransactionFormInputProps) => {
    dispatch(
      addTransaction({
        id: generateID(),
        ...data,
        amount: +data.amount,
      })
    );
    reset();
  };

  return (
    <form
      className={classes.formWrapper}
      onSubmit={handleSubmit(addNewTransaction)}
    >
      <Typography variant="h6" component="h6">
        New transaction
      </Typography>
      <Box margin="normal" className={classes.container}>
        <Box>
          <TextField
            label="Label"
            variant="outlined"
            {...register("label", fieldValidation.labelInput)}
          />
          {errors?.label && (
            <ErrorMessage message={errors?.label?.message || "Error"} />
          )}
        </Box>
        <Box>
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={date}
            {...register("date", fieldValidation.dateInput)}
          />
          {errors?.date && (
            <ErrorMessage message={errors?.date?.message || "Error"} />
          )}
        </Box>
        <Box>
          <TextField
            variant="outlined"
            label="Amount"
            defaultValue=""
            placeholder="0"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("amount", fieldValidation.numberInput)}
          />
          {errors?.amount && (
            <ErrorMessage message={errors?.amount?.message || "Error"} />
          )}
        </Box>
        <TextField
          label="Category"
          select
          className={classes.select}
          defaultValue={allCategories[0].id}
          {...register("category")}
        >
          {allCategories.map((item) => (
            <MenuItem value={item.id} key={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          disabled={!isValid}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};
