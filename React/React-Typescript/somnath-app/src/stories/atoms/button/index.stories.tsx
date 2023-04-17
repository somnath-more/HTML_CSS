import React from 'react';
import { ComponentStory } from '@storybook/react';

import { ButtonComponent } from '.';



export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  
 
} 


const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;


export const ResetPassword = Template.bind({});
ResetPassword.args = {
  label: 'ResetPassword',
  // border:'60px',
  
};
export const Continue = Template.bind({});
Continue.args = {
  label: 'Continue',
   
};

export const ExportReport = Template.bind({});
ExportReport.args = {
  label: 'Export Report',
  
};
export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel',
};
export const SignUp = Template.bind({});
SignUp.args = {
  label: 'SignUp',
};
export const Engage = Template.bind({});
Engage.args = {
  label: 'Engage',
};





