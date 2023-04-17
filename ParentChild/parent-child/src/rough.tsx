<FormControl>
<h1>Hello World</h1>
<Typography variant="header">SignIn</Typography>

<Typography variant="body">Please enter your credentials</Typography>

<Typography variant="body">Email</Typography>
<TextFieldComponent placeholder="abs@gmail.com" />
<Typography variant="body" fontSize={18}>
  Password
</Typography>
{/* Molculee pasfield */}
<TextFieldComponent placeholder="*******" />
{/* <MyComponent>Hello</MyComponent> */}
<Typography variant="body"></Typography>
{/* Molecules */}
{/* <FormGroup row>
  <CheckboxWithLabel
    onChange={function (checked: boolean): void {
      throw new Error("Function not implemented.");
    }}
  /> 
<Typography variant="body">
  Forgotpassword?
 
</Typography>
 
</FormGroup>*/}

<ButtonComponent label="SignUp"></ButtonComponent>
<Typography variant="body"> or </Typography>
{/* Molecule */}
{/* 
<ButtonWithIcon
  label="Google"
  icon={<SvgIcon component={GoogleIcon} viewBox="0 0 24 24" />}
  variant="outlined"
/>
<br />
<ButtonWithIcon
  label="Github"
  icon={<SvgIcon component={GitHubIcon} viewBox="0 0 24 24" />}
  variant="outlined"
/> */}

<Typography variant="body">Don't have an account?Sign up</Typography>
</FormControl>
</Card>