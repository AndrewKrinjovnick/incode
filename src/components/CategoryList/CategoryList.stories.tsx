import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CategoryList } from "./CategoryList";

export default {
  title: "CategoryList",
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = () => <CategoryList />;

export const Disable = Template.bind({});
