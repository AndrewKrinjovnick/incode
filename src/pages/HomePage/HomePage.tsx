import { Container, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CategoryList, TransactionForm } from "../../components";
import { columnsForTransactionTable } from "../../data/columns";
import { useAppSelector } from "../../hooks";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px 0 20px",
    },
    table: {
      height: "400px!important",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();
  const { allTransactions, allCategories } = useAppSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(allTransactions));
    localStorage.setItem("categories", JSON.stringify(allCategories));
  }, [allTransactions, allCategories]);

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
              className={classes.table}
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

export default HomePage;
