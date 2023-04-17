import React from 'react';

import './App.css';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { ButtonGroup } from '@mui/material';

function App() {
  return (
    <div className="App">
    <ButtonGroup>
    <Button 
    startIcon={<SaveIcon/>}
    // endIcon={<SaveIcon/>}
    href='#' 
    size='large'
    
    // disabled
      color='primary'
      variant='outlined'
    >
      Save
    </Button>
    <Button 
    startIcon={<DeleteIcon/>}
    // endIcon={<SaveIcon/>}
    href='#' 
    size='large'
    
    // disabled
      color='secondary'
      variant='outlined'
    >
      DisCard
    </Button>
    </ButtonGroup>
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
