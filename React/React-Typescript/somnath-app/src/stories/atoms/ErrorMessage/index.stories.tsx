import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ErrorMessage, ErrorMessageProps } from '.';

export default {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
} ;

const Template: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Oops! Something went wrong.',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Please Enter A valid value',
  
};

