import React, { FC, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles(() =>
  createStyles({
    categoryInput: {
      width: "100%",
      margin: "5px 0 10px!important",
    },
  })
);

const AddCategoryButton: FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState<string>("");

  const setСategoryName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setCategory(value);
  };

  return (
    <Box>
      <Typography variant="h6" component="h6">
        Categories
      </Typography>
      <TextField
        label="Category"
        variant="outlined"
        className={classes.categoryInput}
        value={category}
        onChange={setСategoryName}
      />
      <Button variant="contained" fullWidth>
        Add category
      </Button>
    </Box>
  );
};

export default AddCategoryButton;
