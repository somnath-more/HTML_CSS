import styled from "@emotion/styled";

import { Grid, Stack, Card, FormControl, FormGroup } from "@mui/material";

import React from "react";

import { ButtonComponent } from "../../atoms/button";
import TextFieldComponent from "../../atoms/TextField";
import Typography from "../../atoms/Typography";
import { ButtonWithIcon } from "../../molecules/ButtonWithIcon";
import CheckboxWithLabel from "../../molecules/ChecBoxWithLabel/index";
import PasswordField from "../../molecules/PasswordField";
import DividerText from "../../atoms/Divider";

function SignIn() {
  return (
    <OuterGrid container>
      <Card>
        <InnerGrid>
          <Stack direction={"row"} spacing={4}>
            <FormControl>
              <Typography variant="header">SignIn</Typography>
              <br />
              <Typography variant="body">
                Please enter your credentials
              </Typography>
              <br />
              <Typography variant="body">Email</Typography>
              <br />
              <TextFieldComponent placeholder="abs@gmail.com" />
              <br />
              <Typography variant="body" fontSize={18}>
                Password
              </Typography>

              {/* Password field molecule */}
              <PasswordField />
              <br />

              <br />
              <Stack
                direction={"row"}
                // spacing={5}
                justifyContent={"space-between"}
              >
                <FormGroup>
                  <CheckboxWithLabel
                    onChange={function (checked: boolean): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </FormGroup>
                <MyCompo>
                  <Typography variant="body">Forgotpassword?</Typography>
                </MyCompo>
              </Stack>
              <br />
              <ButtonComponent label="Sign In"></ButtonComponent>
              <Stack justifyContent={"center"} textAlign={"center"}>
                <br />
                <DividerText />
                <br />
              </Stack>
              <ButtonWithIcon
                label="Sign in with Google"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9998 8.18387C15.9998 7.64007 15.9548 7.09333 15.8588 6.55835H8.16095V9.6389H12.5692C12.3862 10.6324 11.7985 11.5113 10.9378 12.0698V14.0687H13.5678C15.1121 12.6754 15.9998 10.6177 15.9998 8.18387Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M8.1608 16C10.3619 16 12.2182 15.2916 13.5706 14.0688L10.9407 12.07C10.209 12.5579 9.26436 12.8342 8.1638 12.8342C6.03467 12.8342 4.2294 11.4262 3.58166 9.5332H0.867767V11.5938C2.2532 14.2951 5.07506 16 8.1608 16Z"
                      fill="#34A853"
                    />
                    <path
                      d="M3.57905 9.53317C3.23718 8.53964 3.23718 7.4638 3.57905 6.47026V4.4097H0.868147C-0.289382 6.67014 -0.289382 9.33329 0.868147 11.5937L3.57905 9.53317Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M8.1608 3.16633C9.32433 3.1487 10.4489 3.57786 11.2915 4.36563L13.6216 2.08167C12.1462 0.723645 10.188 -0.0229766 8.1608 0.000539093C5.07506 0.000539093 2.2532 1.70542 0.867767 4.40972L3.57867 6.47028C4.2234 4.57433 6.03167 3.16633 8.1608 3.16633Z"
                      fill="#EA4335"
                    />
                  </svg>
                }
                variant="outlined"
              />
              <br />

              <ButtonWithIcon
                label="Sign in With Github"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0538 13.5181 14.0331 14.4958 12.6716C15.4734 11.31 15.9995 9.67619 16 8C16 3.58 12.42 0 8 0Z"
                      fill="black"
                    />
                  </svg>
                }
                variant="outlined"
              />
              <br />
              <Stack
                justifyContent={"center"}
                textAlign={"center"}
                direction={"row"}
              >
                <Typography variant="body">Don't have an account?</Typography>
                <MyCompo>
                  <Typography variant="body">Signup</Typography>
                </MyCompo>
              </Stack>
            </FormControl>
          </Stack>
        </InnerGrid>
      </Card>
    </OuterGrid>
  );
}

export default SignIn;
/////////////////////////////////////
const OuterGrid = styled(Grid)({
  // backgroundColor: "yellow",

  justifyContent: "center",
});

const InnerGrid = styled(Grid)({
  marginTop: 48,
  marginLeft: 47,
  marginRight: 47,
  marginBottom: 48,
});
const MyCompo = styled(Grid)({
  color: "#224DFF",
});
