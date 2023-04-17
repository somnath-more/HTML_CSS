import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const items: string[] = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5'
];

function ItemList(): JSX.Element {
  return (
    <List>
      {items.map((item: string) => (
        <ListItem key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default ItemList;
