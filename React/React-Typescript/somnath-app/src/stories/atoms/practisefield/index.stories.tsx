import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Story } from '@storybook/react/types-6-0';
// import { TextFieldProps } from './InputField';
import TextFieldComponent from ".";
import theme from "../../../utils/theme";
export default {
  title: "Atoms/TextField",
  component: TextFieldComponent,
} as ComponentMeta<typeof TextFieldComponent>;

const Template: ComponentStory<typeof TextFieldComponent> = (args) => (
  <TextFieldComponent {...args} />
);

export const Email = Template.bind({});
Email.args = {
  placeholder: "rhernandez@gmail.com",
  style: {
    width: 384,
    borderRadius: 4,
    border: `1px solid ${theme.palette.secondary.light}`,
  },
};