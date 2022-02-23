import React, { FC, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { createStyles, makeStyles } from "@mui/styles";

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
  })
);

const data = [{ label: "234" }, { label: "vbc" }, { label: "fghf" }];

const TransactionForm: FC = () => {
  const classes = useStyles();
  const [label, setLabel] = useState<string>("");

  const setLabelHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setLabel(value);
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
          value={label}
          onChange={setLabelHandler}
        />
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField variant="outlined" type="number" defaultValue={0} />
        <Select label={data[0].label}>
          {data.map((item) => (
            <MenuItem value={item.label} key={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained">Add category</Button>
      </Box>
    </FormControl>
  );
};

export default TransactionForm;
