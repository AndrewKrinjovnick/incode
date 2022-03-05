import React from "react";
import { Container, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import { TransactionForm } from "../../components/TransactionForm/TransactionForm";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px 0 20px",
    },
  })
);

export const HomePage = () => {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CategoryList />
          </Grid>
          <Grid item xs={10}>
            <TransactionForm />
            <TransactionTable />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
