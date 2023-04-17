import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { SearchBar, SearchBarProps } from '.';
// import { Search } from '@mui/icons-material';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Search...',
    },
  },
} ;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Search any Candidate',
 
};

export const OnSearch = Template.bind({});
OnSearch.args = {
  placeholder: 'Search any Candidate',
  onSearch: (value: string) => console.log(`Searching for ${value}`),


};
