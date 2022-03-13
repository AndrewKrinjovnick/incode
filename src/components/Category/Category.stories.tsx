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
    disableButtons: {
      description: "Is the category close for editing",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    onEditButtonClick: {
      description: "Function that opens the edit form",
    },
    onDeleteButtonClick: {
      description: "Category removal handler",
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
  disableButtons: true,
  onDeleteButtonClick: () => 1,
};

export const Active = Template.bind({});

Active.args = {
  category: { id: "123452", label: "Active" },
  onEditButtonClick: () => 1,
  disableButtons: false,
  onDeleteButtonClick: () => 1,
};
