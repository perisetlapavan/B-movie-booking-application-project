import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
  return (
    <Box
      component="form"
      sx={{
        height:"400px",
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex" ,flexDirection:"column" , justifyContent:"space-around"}}
    >
      <TextField required id="standard-basic" label="First Name" variant="standard" />
      <TextField required id="standard-basic" label="Last Name" variant="standard" />
      <TextField required id="standard-basic" label="Email" variant="standard" />
      <TextField required id="standard-basic" label="Password" variant="standard" />
      <TextField required id="standard-basic" label="Contact No" variant="standard" />
      <Button variant="contained" >REGISTER</Button>
    </Box>
  );
}
