import { Container, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CategoryList, TransactionForm } from "../../components";
import { columnsForTransactionTable } from "../../data/columns";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px 0 20px",
    },
  })
);

const data = [
  {
    id: "1",
    label: "asdfasdf",
    date: 12342134,
    amount: 634,
    category: "sdfsaf",
  },
  {
    id: "2",
    label: "cbvxcb",
    date: 12342134,
    amount: 634,
    category: "sdfsaf",
  },
  {
    id: "3",
    label: "dfbdfg",
    date: 12342134,
    amount: 634,
    category: "sdfsaf",
  },
];

const Home = () => {
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
            <DataGrid
              rows={data}
              columns={columnsForTransactionTable}
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
