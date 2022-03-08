import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import {
  addToArchive,
  transactionFiltering,
} from "../../store/slices/transactionSlice";
import { ID } from "../../types";

export const useStyles = makeStyles(() =>
  createStyles({
    table: {
      height: "400px!important",
    },
  })
);

const columnsForTransactionTable: GridColDef[] = [
  { field: "label", headerName: "Label", width: 200 },
  { field: "date", headerName: "Date", width: 170 },
  { field: "amount", headerName: "Amount", width: 180 },
];

const radioBtns = [
  { value: "all", label: "All" },
  { value: "archived", label: "Archived" },
];

export const TransactionTable: FC = () => {
  const classes = useStyles();
  const { filteredTransactions } = useAppSelector(
    (state) => state.transactions
  );
  const { categoriesByID } = useAppSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState<string>(radioBtns[0].value);

  const handleChange = (id: ID) => {
    dispatch(addToArchive(id));
  };

  const hableRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
    dispatch(transactionFiltering(event.target.value));
  };

  return (
    <>
      <RadioGroup onChange={hableRadio} value={radioValue} row>
        {radioBtns.map((radioBtn) => (
          <FormControlLabel
            key={radioBtn.label}
            value={radioBtn.value}
            control={<Radio />}
            label={radioBtn.label}
          />
        ))}
      </RadioGroup>
      <DataGrid
        className={classes.table}
        rows={filteredTransactions}
        columns={[
          ...columnsForTransactionTable,
          {
            field: "category",
            headerName: "Category",
            width: 200,
            renderCell: (params: GridRenderCellParams<ID>) => (
              <span>{categoriesByID[params.value].label}</span>
            ),
          },
          {
            field: "archived",
            headerName: "Add to archive",
            width: 150,
            renderCell: (params: GridRenderCellParams<boolean>) => {
              return (
                <Checkbox
                  checked={params.value}
                  onChange={() => handleChange(params.row.id)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              );
            },
          },
        ]}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </>
  );
};
