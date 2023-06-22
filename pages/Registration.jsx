import React, { useState } from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



export default function Registration() {
  const navigate = useNavigate;

const [register, setRegister] = useState({
  userName: "",
  regno: "",
  email: "",
  password: "",
  program: "",
  level: ""

});

const handleInputChange = (e) => {
  setRegister({...register, [e.target.name]: e.target.value});
}

const onSubmit = async (e) => {
  await axios.post("http://localhost:8080/api/student/add", register);
  navigate("/Login")

}
    


  return (
    <>
    
    <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}} >
        <Grid item xs={12} sm={6} md={4}>
        <h2 style={{textAlign: 'center', color: ' #ff4da6'}}>REGISTRATION</h2>
            <Paper elevation={3} style={{padding: '2rem'}}>
            

            <form onSubmit={(e) => onSubmit(e)}>
      <TextField
        label="UserName"
        variant="filled"
        style={{textAlign: 'center'}}
        required
        fullWidth
        name="UserName"
        onChange={(e) => handleInputChange(e)}
      /><br /><br />
       <TextField
       style={{textAlign: 'center'}}
        label="Registration No "
        variant="filled"
        fullWidth
        required
        name="Registration No " 
        onChange={(e) => handleInputChange(e)}
        // value={firstName}
        // onChange={e => setFirstName(e.target.value)}
      /><br /><br />
      <TextField
        label="Email"
        variant="filled"
        required
        fullWidth
        style={{textAlign: 'center'}}
        name="Email"
        onChange={(e) => handleInputChange(e)}
        // value={lastName}
        // onChange={e => setLastName(e.target.value)}
      /><br /><br />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required fullWidth
        name="Password"
        onChange={(e) => handleInputChange(e)}
        // value={email}
        // onChange={e => setEmail(e.target.value)}
      /> <br /><br />
      

<TextField
        label="Program"
        variant="filled"
        type="Program"
        required
        fullWidth
        name="program"
        onChange={(e) => handleInputChange(e)}
        // value={password}
        // onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <TextField
        label="Level"
        variant="filled"
        type="level"
        required
        fullWidth
        name="level"
        onChange={(e) => handleInputChange(e)}
        // value={password}
        // onChange={e => setPassword(e.target.value)}
      /><br /><br />


      <div>
        
        <Button type="submit" variant="contained" fullWidth  color='inherit' sx={{backgroundColor:'#ff6699'}}>
          Registration
        </Button>
      </div>
    </form>



            </Paper>

        </Grid>

    </Grid>
      
    
    </>
    
  );

  
                
                }


