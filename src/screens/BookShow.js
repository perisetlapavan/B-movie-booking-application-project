import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../common/header/Header';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Login() {
    return (<div style={{textAlign:"center"}}>
        <Header extra="false" />
        <Typography style={{margin:"6px" , marginLeft:'24px' , height:'24px'}}><a href='/Details' style={{textDecoration: "none" , color:'black'}}> {"<"} Back to Movie Details</a></Typography>
        <div style={{marginLeft:"580px"}}>
        <Card sx={{ maxWidth: 340 }}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{ display: "flex", flexDirection: "column" , justifyContent:"space-between", padding:"40px"}}
        >
            <TextField id="standard-basic" label="Choose Location*" variant="standard" style={{margin:"auto"}}/><br></br>
            <TextField id="standard-basic" label="Choose Language*" variant="standard" style={{margin:"auto"}}/><br></br>
            <TextField id="standard-basic" label="Choose Show Date*" variant="standard" style={{margin:"auto"}}/><br></br>
            <TextField id="standard-basic" label="Choose Show Time*" variant="standard" style={{margin:"auto"}}/><br></br>
            <TextField id="standard-basic" label="Tickets(20 available)*" variant="standard" style={{margin:"auto"}}/><br></br>
            <h5>Unit Price Rs.500</h5>
            <h5>Total Price Rs.0</h5>
            <Button variant="contained" style={{margin:"auto"}}>BOOK SHOW</Button>
        </Box>
        </Card>
        </div>
    </div>
    );
}
