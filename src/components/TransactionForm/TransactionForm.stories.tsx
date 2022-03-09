import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TransactionForm } from "./TransactionForm";

export default {
  title: "TransactionForm",
  component: TransactionForm,
} as ComponentMeta<typeof TransactionForm>;

const Template: ComponentStory<typeof TransactionForm> = () => (
  <TransactionForm />
);

export const Default = Template.bind({});
