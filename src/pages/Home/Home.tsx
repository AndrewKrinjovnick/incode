import { Container, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CategoryList, TransactionForm } from "../../components";
import { columnsForTransactionTable } from "../../data/columns";
import { useAppSelector } from "../../hooks";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px 0 20px",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const { allTransactions } = useAppSelector((state) => state.transactions);

  return (
    <main className={classes.container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CategoryList />
          </Grid>
          <Grid item xs={10}>
            <TransactionForm />
            <DataGrid
              rows={allTransactions}
              columns={columnsForTransactionTable}
              disableExtendRowFullWidth={false}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
