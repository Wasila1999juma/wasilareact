import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';


export default function Proform({onSubmit,onCancel}) {

  const [ProName,setproName] = React.useState(null)
  const [SupervisorName,setsupervisorName] = React.useState(null)
  const [Year ,setyear] = React.useState(null)
  const [StdName,setstdName ]= React.useState(null)
  const [RegistrationNo,setregNo] = React.useState(null)
  
  
  

  const [open,setOpen] = React.useState(false);
  // const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    proName :ProName,
    regNo:RegistrationNo,
    supervisorName:SupervisorName,
    stdName:StdName,
    year:Year,
   
    
  }

  const [projectsList,setProjectsList] = React.useState([])

  
  const saveProject = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseProject = await axios.post("http://localhost:8080/api/project/add",body);
        const data = responseProject.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>

       <TextField onChange = {(event)=>{ setproName(event.target.value)
       }} name='proName' placeholder='enter ProName' label="proName" color='success' />
       
       <TextField  onChange = {(event)=>{ setsupervisorName(event.target.value)
       }}  name='supervisorName' placeholder='enter  supervisorName' label="supervisorName" color='success' />

       <TextField onChange = {(event)=>{ setyear(event.target.value)
       }}  name='year' placeholder='enter year' label="year" color='success' />
       <TextField onChange = {(event)=>{ setstdName(event.target.value)
       }}  name='stdName' placeholder='enter stdName' label="stdName" color='success' />

       <TextField onChange = {(event)=>{ setregNo(event.target.value)
       }}  name='regNo' placeholder='enter regNo' label="regNo" color='success' />

      

       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveProject}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}

