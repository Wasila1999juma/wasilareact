import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';


export default function StuForm({onSubmit,onCancel}) {

  const [UserName,setuserName] = React.useState(null)
  const [RegistrationNo,setregNo] = React.useState(null)
  const [Email ,setemail] = React.useState(null)
  const [Password,setpassword ]= React.useState(null)
  const [Program,setprogram] = React.useState(null)
  const [Level,setlevel] = React.useState(null)
  
  

  const [open,setOpen] = React.useState(false);
  // const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    userName:UserName,
    regNo:RegistrationNo,
    email:Email,
    password:Password,
    program:Program,
    level:Level,
    
  }

  const [studentList,setStudentList] = React.useState([])

  
  const saveStudent = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseStudent = await axios.post("http://localhost:8080/api/student/add",body);
        const data = responseStudent.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>

       <TextField onChange = {(event)=>{ setuserName(event.target.value)
       }} name='userName' placeholder='enter Username' label="UserName" color='success' />
       
       <TextField  onChange = {(event)=>{ setregNo(event.target.value)
       }}  name='regNo' placeholder='enter  regNo' label="regNo" color='success' />

       <TextField onChange = {(event)=>{ setemail(event.target.value)
       }}  name='email' placeholder='enter email' label="email" color='success' />
       <TextField onChange = {(event)=>{ setpassword(event.target.value)
       }}  name='password' placeholder='enter password' label="password" color='success' />

       <TextField onChange = {(event)=>{ setprogram(event.target.value)
       }}  name='program' placeholder='enter program' label="program" color='success' />

       <TextField onChange = {(event)=>{ setlevel(event.target.value)
       }}  name='level' type='name' placeholder='enter  level' label="level" color='success' />

       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveStudent}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}

