import { Provider } from "react-redux";
import { addDecorator } from '@storybook/react';
import store from "../src/store";
import { CssBaseline } from "@mui/material";

addDecorator((story) => (
  <Provider store={store}>
    <CssBaseline />
    {story()}
  </Provider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}