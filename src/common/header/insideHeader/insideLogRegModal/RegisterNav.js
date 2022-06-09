import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex" ,flexDirection:"column" , justifyContent:"space-around"}}
    >
      <TextField id="standard-basic" label="First Name*" variant="standard" /><br></br>
      <TextField id="standard-basic" label="Last Name*" variant="standard" /><br></br>
      <TextField id="standard-basic" label="Email*" variant="standard" /><br></br>
      <TextField id="standard-basic" label="Password*" variant="standard" /><br></br>
      <TextField id="standard-basic" label="Contact No*" variant="standard" /><br></br>
      <Button variant="contained">REGISTER</Button>
    </Box>
  );
}
