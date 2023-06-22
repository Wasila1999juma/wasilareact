
import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import NavAndSidebar from '../utils/NavAndSidebar';
export default function Login() {

  const [username,setuserName] = React.useState(null)
  const [password,setuserPassword] = React.useState(null)
  const navigate = useNavigate();
  const onuserNameChange = (event)=>{
    setuserName(event.target.value)
  }
  const onUsernamePassword = (event)=>{
    setuserPassword(event.target.value)
  }
  
  const handleSubmit = ()=>{
    try {
       const url = "http://localhost:8080/api/user/all";
      const fetch = async (url)=>{
        const response = await axios.get(url);

  
        for (let index = 0; index < response.data.length; index++) {

          if (username == response.data[index]['userName'] && password == response.data[index]['userPassword']){
            localStorage.setItem("token",JSON.stringify(response.data[index]))
            console.log('Login successful');
            navigate("/dashboard")
            break;
          }else continue;
        }

      } 
      fetch(url)
    }catch (error){
      console.log('error is:', error);
    }
  }
  return (
<>
     {/* <NavAndSidebar />   */}
        <Stack
     justifyContent={'center'}
     direction={'row'}>
        <Stack 
          sx={{backgroundColor:'rgba(255, 102, 153,0.1)'}}
          justifyContent={'center'}
          direction={'row'}
          borderRadius={3}
          p={5}
          width={"40%"}
        >
            <Stack mt={"10%"} sx={{width:"100%"}} direction={"column"} spacing={2}>
                <Stack justifyContent={'center'}
                direction={'row'} >
                <Typography
                variant='h4'
                >WELCOME</Typography> 
                </Stack>
                <TextField onChange= {onuserNameChange} autoComplete='off' color='success' id="filled-basics"  name='userName' label="Username" variant="filled"/>
                
                <TextField onChange= {onUsernamePassword} autoComplete='off' required color='success' id="filled-basic"  name = 'userPassword' label="Password" variant="filled"/>

               <Button onClick={handleSubmit} type="submit" color='inherit' sx={{backgroundColor:'#ff6699'}} variant='contained'>LOGIN</Button>
               
               
            </Stack>
            
        </Stack>
    </Stack>

    </>
 


    
  )
}
