import React, { FC, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
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

const TransactionForm: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { allCategories } = useAppSelector((state) => state.transactions);

  const [transaction, setTransaction] = useState<ITransaction>({
    id: "",
    label: "",
    date,
    amount: 0,
    category: allCategories[0].label,
  });

  const setLabel = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setTransaction((preState) => ({
      ...preState,
      label: value,
    }));
  };

  const setAmount = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setTransaction((preState) => ({
      ...preState,
      amount: +value,
    }));
  };

  const setCategory = (evt: SelectChangeEvent) => {
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

  const setTransactionHandler = () => {
    if (transaction.label.trim() && transaction.label.length < 20) {
      dispatch(addTransaction({ ...transaction, id: uuidv4() }));
      setTransaction((preState) => ({
        ...preState,
        id: "",
        label: "",
        amount: 0,
      }));
    } else {
      setTransaction((preState) => ({
        ...preState,
        label: "",
      }));
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
          type="number"
          value={transaction.amount}
          onChange={setAmount}
        />
        <Select
          value={transaction.category}
          onChange={setCategory}
          className={classes.select}
        >
          {allCategories.map((item) => (
            <MenuItem value={item.label} key={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          onClick={setTransactionHandler}
          className={classes.btn}
        >
          Add
        </Button>
      </Box>
    </FormControl>
  );
};

export default TransactionForm;
