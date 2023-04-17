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

// export const Password = Template.bind({});
// Password.args = {

//   placeholder: '********',
//   style:{
//     width:384,
//     borderRadius:4,
//     border:`1px solid ${theme.palette.secondary.light}`
//   }
// };

// export const ConfirmPassword = Template.bind({});
// ConfirmPassword.args = {
//   label: 'Number',
//   type: 'number',
//   placeholder: 'Confirm Password',
// };

// export const ValueChange = Template.bind({});
// ValueChange.args = {
//   label: 'Name',
//   value: 'Somnath More',
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
//   },
// };
