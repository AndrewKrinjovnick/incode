import { Container, Typography } from "@mui/material";
import React from "react";
import { Graph } from "../../components/Graph/Graph";

export const GraphPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ margin: "10px" }}>
        Analitics
      </Typography>
      <Graph />
    </Container>
  );
};
