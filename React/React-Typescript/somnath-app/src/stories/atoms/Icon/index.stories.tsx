import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomIcon, { iconprops } from '.';

export default {
  title: 'Atoms/Icon',
  component: CustomIcon,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        
      },
    },
  },
} as Meta;

const Template: Story<iconprops> = (args) => <CustomIcon {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  iconName: 'Delete',
};

export const Google = Template.bind({});
Google.args = {
  iconName: 'Google',
};

export const Github = Template.bind({});
Github.args = {
  iconName: 'Github',
};
export const Visibility= Template.bind({});
Visibility.args = {
  iconName: 'Visibility',
};
export const AddBox= Template.bind({});
AddBox.args = {
  iconName: 'AddBox',
};
export const Search= Template.bind({});
Search.args = {
  iconName: 'Search',
};
export const Download= Template.bind({});
Download.args = {
  iconName: 'Download',
};
export const Filter= Template.bind({});
Filter.args = {
  iconName: 'Filter',
};
export const Calender= Template.bind({});
Calender.args = {
  iconName: 'Calender',
};

