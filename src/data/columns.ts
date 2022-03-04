import { GridColDef } from "@mui/x-data-grid";

export const columnsForTransactionTable: GridColDef[] = [
  { field: "label", headerName: "Label", width: 250 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "amount", headerName: "Amount", width: 200 },
  { field: "category", headerName: "Category", width: 280 },
];
