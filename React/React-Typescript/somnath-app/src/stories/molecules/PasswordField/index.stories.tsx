import React from "react";
import { Meta, Story } from "@storybook/react";
import TextFieldComponent, { InputFieldProps } from "./index";

export default {
  title: "molecules/TextFieldComponent",
  component: TextFieldComponent,
} as Meta;

const Template: Story<InputFieldProps> = (args) => (
  <TextFieldComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter password",
  // label: "Password",
};
