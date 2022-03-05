import React, { FC, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";
import { ITransaction } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTransaction } from "../../store/reducers/transactionReducer";

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

const TransactionForm: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { allCategories } = useAppSelector((state) => state.transactions);

  const [transaction, setTransaction] = useState<ITransaction>({
    ...defaultState,
    category: allCategories[0].label,
  });

  const addNewTransaction = () => {
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

  const setLabel = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;
    setTransaction((preState) => ({
      ...preState,
      label: value,
    }));
  };

  const setAmount = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (/^[+-]?((\.\d*)|(\d*(\.\d*)?))$/.test(value)) {
      if (!+value[0] && +value.slice(1)) {
        setTransaction((preState) => ({
          ...preState,
          amount: +value,
        }));
        return;
      }
      setTransaction((preState) => ({
        ...preState,
        amount: value,
      }));
    }
  };

  const setCategory = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setTransaction((preState) => ({
      ...preState,
      category: value,
    }));
  };

  const setDate = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setTransaction((preState) => ({
      ...preState,
      date: value,
    }));
  };

  const enterTransaction = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      addNewTransaction();
    }
  };

  return (
    <FormControl className={classes.formWrapper}>
      <Typography variant="h6" component="h6">
        New transaction
      </Typography>
      <Box margin="normal" className={classes.container}>
        <TextField
          label="Label"
          variant="outlined"
          value={transaction.label}
          onChange={setLabel}
          onKeyDown={enterTransaction}
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
          onKeyDown={enterTransaction}
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
        <Button
          variant="contained"
          onClick={addNewTransaction}
          className={classes.btn}
        >
          Add
        </Button>
      </Box>
    </FormControl>
  );
};

export default TransactionForm;
