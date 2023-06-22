import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';


export default function Supervisorform({onSubmit,onCancel}) {

  const [FirstName,setfirstName] = React.useState(null)
  const [LastName,setlastName] = React.useState(null)
  const [Email ,setemail] = React.useState(null)
  const [StuName,setstuName ]= React.useState(null)
  const [Year,setyear] = React.useState(null)
  
  
  
  const [open,setOpen] = React.useState(false);
  // const {getOpen,setOpen} = useContext(AppContext);
  // const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    firtName:FirstName,
    LastName:LastName,
    email:Email,
    stuName:StuName,
    yaer:Year,
   
    
  }

  const [supervisorList,setSupervisorList] = React.useState([])

  
  const saveSupervisor= ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseSupervisor = await axios.post("http://localhost:8080/api/supervisor/add",body);
        const data = responseSupervisor.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>

       <TextField onChange = {(event)=>{ setfirstName(event.target.value)
       }} name='firstName' placeholder='enter FirstName' label="FistName" color='success' />
       
       <TextField  onChange = {(event)=>{ setlastName(event.target.value)
       }}  name='lastName' placeholder='enter  LastName' label="LastName" color='success' />

       <TextField onChange = {(event)=>{ setemail(event.target.value)
       }}  name='email' placeholder='enter email' label="email" color='success' />
       <TextField onChange = {(event)=>{ setstuName(event.target.value)
       }}  name='stuName' placeholder='enter StuName' label="StuName" color='success' />

       <TextField onChange = {(event)=>{ setyear(event.target.value)
       }}  name='year' placeholder='enter Year' label="Year" color='success' />

       
<Stack direction={"row"} justifyContent={'center'} spacing = {2}>

<Button onClick={saveSupervisor}  variant={"contained"} color={"success"}>Submit</Button>
<Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
</Stack>
</Stack>
            
        
         
  );
}

