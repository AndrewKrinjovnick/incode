import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AddCategoryForm } from "./AddCategoryForm";

export default {
  title: "AddCategoryForm",
  component: AddCategoryForm,
} as ComponentMeta<typeof AddCategoryForm>;

const Template = () => <AddCategoryForm />;

export const Default = Template.bind({});
