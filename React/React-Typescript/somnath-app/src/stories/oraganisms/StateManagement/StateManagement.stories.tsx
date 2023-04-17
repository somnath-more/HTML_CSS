import React from "react";
import { Meta, Story } from "@storybook/react";

import StateMgmt from "./StateMgmt";

export default {
  title: "organisms/StateMgmt",
  component: StateMgmt,
} as Meta;

const Template: Story<any> = (args) => (
  <StateMgmt {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter password",
  // label: "Password",
};
