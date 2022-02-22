import { Container, Typography } from "@mui/material";
import React from "react";

class ErrorBoundary extends React.Component<unknown, { hasError: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Typography variant="h1" component="h2">
            Error
          </Typography>
          <Typography variant="h5" component="span">
            This page doesn&#39;t exist
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
