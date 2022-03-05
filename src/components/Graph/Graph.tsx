import React, { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { randColor } from "../../utils";

Chart.register(...registerables);

interface IObjCategories {
  [key: string]: number;
}

const Graph: FC = () => {
  const { allTransactions } = useAppSelector((state) => state.transactions);
  const [amounts, setAmounst] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const objCategories: IObjCategories = {};
    const arrCategories = [];
    const arrAmounts = [];
    const arrColors = [];

    allTransactions.forEach((transaction) => {
      if (objCategories[transaction.category]) {
        objCategories[transaction.category] += transaction.amount as number;
      } else {
        objCategories[transaction.category] = transaction.amount as number;
      }
    });

    for (const [key, value] of Object.entries(objCategories)) {
      arrCategories.push(key);
      arrAmounts.push(value);
      arrColors.push(randColor());
    }

    setCategories(arrCategories);
    setAmounst(arrAmounts);
    setColors(arrColors);
  }, [allTransactions]);

  if (!allTransactions.length) {
    return <Typography variant="h5">No data</Typography>;
  }

  return (
    <Bar
      data={{
        labels: categories,
        datasets: [
          {
            data: amounts,
            backgroundColor: colors,
            barPercentage: 1,
            categoryPercentage: 0.3,
          },
        ],
      }}
      width={1200}
      height={600}
      options={{
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default Graph;
