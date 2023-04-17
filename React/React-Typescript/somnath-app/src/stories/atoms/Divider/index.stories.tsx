

import React from "react";
import { Args, Meta, Story } from "@storybook/react";
// import , { InputFieldProps } from "./index";
import DividerText from ".";
export default {
  title: "Atoms/DividerText",
  component: DividerText,
} as Meta;

const Template: Story<Args> = (args) => (
  <DividerText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // placeholder: "Enter password",
  // label: "Password",
};




