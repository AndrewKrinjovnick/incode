import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { addToArchive } from "../../store/slices/transactionSlice";
import { ID } from "../../types";

export const useStyles = makeStyles(() =>
  createStyles({
    table: {
      height: "400px!important",
    },
  })
);

const radioButtons = [
  { value: "all", label: "All" },
  { value: "archived", label: "Archived" },
];

export const TransactionTable: FC = () => {
  const classes = useStyles();
  const { allTransactions, transactionArchive, transactionsArchiveByID } =
    useAppSelector((state) => state.transactions);
  const [isArchive, setIsArchive] = useState(false);
  const { categoriesByID } = useAppSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState<string>(radioButtons[0].value);

  const onAddToArchive = (id: ID) => {
    dispatch(addToArchive(id));
  };

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
    if (event.target.value === "archived") {
      setIsArchive(true);
      return;
    }
    setIsArchive(false);
  };

  return (
    <>
      <RadioGroup onChange={handleRadio} value={radioValue} row>
        {radioButtons.map((radioBtn) => (
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
        rows={isArchive ? transactionArchive : allTransactions}
        columns={[
          { field: "label", headerName: "Label", width: 200 },
          { field: "date", headerName: "Date", width: 170 },
          { field: "amount", headerName: "Amount", width: 180 },
          {
            field: "category",
            headerName: "Category",
            width: 200,
            renderCell: (params: GridRenderCellParams<ID>) => (
              <span>{categoriesByID[params.value].label}</span>
            ),
          },
          {
            field: "id",
            headerName: "Add to archive",
            width: 150,
            renderCell: (params: GridRenderCellParams<string>) => {
              return (
                <Button
                  variant="contained"
                  onClick={() => onAddToArchive(params.value)}
                  disabled={!!transactionsArchiveByID[params.value]}
                >
                  archive
                </Button>
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
