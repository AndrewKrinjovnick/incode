import { GridColDef } from "@mui/x-data-grid";

export const columnsForTransactionTable: GridColDef[] = [
  { field: "label", headerName: "Label" },
  { field: "date", headerName: "Date" },
  { field: "amount", headerName: "Amount" },
  {
    field: "category",
    headerName: "Category",
  },
];
