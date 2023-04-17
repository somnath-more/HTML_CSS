import { Grid, Stack, styled } from "@mui/material";
import React from "react";
// import GridList from "./GridList";
import GridList1 from "./GridList1";
function StateMgmt() {
  return (
    <div>
     
      <OuterGrid container>
        
          
          <InnerGrid>
            <Stack>
              {/* <GridList/> */}
              <GridList1/>
            </Stack>
          </InnerGrid>
        
      </OuterGrid>
    </div>
  );
}

export default StateMgmt;

/////////////////////////////////////
const OuterGrid = styled(Grid)({
//   backgroundColor: "yellow",

justifyContent: "center",
});

const InnerGrid = styled(Grid)({
//   marginTop: 48,
//   marginLeft: 47,
//   marginRight: 47,
//   marginBottom: 48,
   justifyContent:"center" ,
    alignContent:"center",
});
const MyCompo = styled(Grid)({
  color: "#224DFF",
});
