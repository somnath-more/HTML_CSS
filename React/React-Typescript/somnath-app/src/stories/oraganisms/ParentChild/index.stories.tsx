import React from "react";
import { Args, Meta, Story } from "@storybook/react";
// import , { InputFieldProps } from "./index";
import SignIn from ".";
export default {
  title: "organisms/SignIn",
  component: SignIn,
} as Meta;

const Template: Story<Args> = (args) => (
  <SignIn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter password",
  // label: "Password",
};
