import { createStyles, makeStyles } from "@mui/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import React, { FC } from "react";
import { useAppSelector } from "../../hooks";

export const useStyles = makeStyles(() =>
  createStyles({
    table: {
      height: "400px!important",
    },
  })
);

const columnsForTransactionTable: GridColDef[] = [
  { field: "label", headerName: "Label", width: 250 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "amount", headerName: "Amount", width: 200 },
  { field: "category", headerName: "Category", width: 280 },
];

export const TransactionTable: FC = () => {
  const classes = useStyles();
  const { allTransactions } = useAppSelector((state) => state.transactions);

  return (
    <DataGrid
      className={classes.table}
      rows={allTransactions}
      columns={columnsForTransactionTable}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  );
};
