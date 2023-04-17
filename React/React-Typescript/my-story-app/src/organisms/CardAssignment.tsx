import styled from '@emotion/styled';
import { Card, Chip, Grid, Icon, Stack } from '@mui/material';
import React from 'react'
import { ButtonWithIcon } from '../molecules/ButtonWithIcon';
// import CustomTypograpyComponent from '../atoms/CustomTypoGrapy';
import { Typography } from '@material-ui/core';
import MyIcon from '../atoms/icon/MyIcon';
import BigIcon from '../atoms/icon/BigICon'
import myImage from '../images/myImage.png';


 function CardAssignment() {
  return (
      
    <OuterGrid container>
      <Card>
      HEllo
      Hello

      
      <Typography variant="subtitle1">Bring you human to work</Typography>
      <br />
      <Typography variant="body1">Erica Keswin</Typography>
      <br />
      <Stack alignContent={"space-between"} direction={"row"} spacing={8}>
         <Stack direction={"row"} spacing={2}>
         <BigIcon/>
         <Typography variant='caption'>13 minutes read</Typography>
         </Stack>
         <br />
          <Stack direction={"row"} spacing={2} justifyContent={"left"} textAlign={"left"}>
           <MyIcon/>
           <Typography variant='caption'>1.9k reads</Typography>
           </Stack>
        </Stack>
        <br />
      <ButtonWithIcon
      label="Add to library"
      icon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 6V0H8.5V6H14.5V8H8.5V14H6.5V8H0.5V6H6.5Z" fill="white"/>
      </svg>}
      variant="text"    />
    

      </Card>
    </OuterGrid>
  )
}

export default CardAssignment

const OuterGrid = styled(Grid)({
  // backgroundColor: "yellow",

  justifyContent: "center",
});