import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Category, ICategoryProps } from "./Category";

export default {
  title: "Category",
  component: Category,
  argTypes: {
    category: {
      description: "Category, includes ID and title",
    },
    index: {
      description: "Category number(1 item closed for editing)",
      options: [0, 1],
      control: {
        type: "radio",
      },
    },
    openEditForm: {
      description: "Function that opens the edit form",
    },
    defaultOpenValue: {
      description: "Initial state of the category (open)",
    },
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args: ICategoryProps) => (
  <Category {...args} />
);

export const Disable = Template.bind({});

Disable.args = {
  category: { id: "1233452", label: "Disable" },
  onEditButtonClick: () => 1,
  disableButtons: false,
};

export const Active = Template.bind({});

Active.args = {
  category: { id: "123452", label: "Active" },
  onEditButtonClick: () => 1,
  disableButtons: true,
};
