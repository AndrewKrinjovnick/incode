import { Provider } from "react-redux";
import { addDecorator } from '@storybook/react';
import store from "../src/store";

addDecorator((story) => (
  <Provider store={store}>
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