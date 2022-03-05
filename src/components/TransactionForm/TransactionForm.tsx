import React, { FC, useState } from "react";
import { Button, TextField, Typography, MenuItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { ITransaction } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTransaction } from "../../store/slices/transactionSlice";

const useStyles = makeStyles(() =>
  createStyles({
    formWrapper: {
      width: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "5px 0 10px",
    },
    select: {
      width: "150px",
    },
    btn: {
      width: "100px",
    },
  })
);

const date = new Date().toISOString().slice(0, 10);
const defaultState = {
  id: "",
  label: "",
  date,
  amount: "",
};

export const TransactionForm: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { allCategories } = useAppSelector((state) => state.categories);

  const [transaction, setTransaction] = useState<ITransaction>({
    ...defaultState,
    category: allCategories[0].label,
  });

  const addNewTransaction = (event) => {
    event.preventDefault();
    if (transaction.label.trim() && transaction.label.length < 20) {
      dispatch(
        addTransaction({
          ...transaction,
          amount: !+transaction.amount ? 0 : +transaction.amount,
          id: uuidv4(),
        })
      );
      setTransaction({
        ...defaultState,
        category: allCategories[0].label,
      });
    } else {
      setTransaction((preState) => ({
        ...preState,
        label: "",
      }));
    }
  };

  const setValue = (field: string) => (event) => {
    if (field === "amount") {
      const { value } = event.target;
      if (/^[+-]?((\.\d*)|(\d*(\.\d*)?))$/.test(value)) {
        if (!+value[0] && +value.slice(1)) {
          setTransaction((preState) => ({
            ...preState,
            [field]: +value,
          }));
          return;
        }
        setTransaction((preState) => ({
          ...preState,
          [field]: value,
        }));
      }
      return;
    }
    setTransaction((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const setLabel = setValue("label");
  const setCategory = setValue("category");
  const setDate = setValue("date");
  const setAmount = setValue("amount");

  return (
    <form className={classes.formWrapper} onSubmit={addNewTransaction}>
      <Typography variant="h6" component="h6">
        New transaction
      </Typography>
      <Box margin="normal" className={classes.container}>
        <TextField
          label="Label"
          variant="outlined"
          value={transaction.label}
          onChange={setLabel}
        />
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={transaction.date}
          onChange={setDate}
        />
        <TextField
          variant="outlined"
          label="Amount"
          type="text"
          placeholder="0"
          inputProps={{
            inputMode: "numeric",
          }}
          value={transaction.amount}
          onChange={setAmount}
        />
        <TextField
          label="Category"
          select
          value={transaction.category}
          onChange={setCategory}
          className={classes.select}
        >
          {allCategories.map((item) => (
            <MenuItem value={item.label} key={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type="submit" className={classes.btn}>
          Add
        </Button>
      </Box>
    </form>
  );
};
