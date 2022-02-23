import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { AddCategoryButton } from "..";

const data = [
  { label: "asdfasdf" },
  { label: "vcb" },
  { label: "cv" },
  { label: "xcv" },
  { label: "43 fgh" },
];

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "10px 10px 0",
    },
  })
);

const CategoryList: FC = () => {
  const classes = useStyles();
  return (
    <>
      <AddCategoryButton />
      {data.map((category) => (
        <div key={category.label} className={classes.container}>
          <Typography>{category.label}</Typography>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
