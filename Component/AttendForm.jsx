import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { useState } from 'react';


export default function AttendForm({onSubmit,onCancel}) {

  const [Date,setdate] = React.useState(null)
  const [Time,settime] = React.useState(null)
  const [Discription ,setdisc] = React.useState(null)
  const [StuName,setstuName ]= React.useState(null)
  const [SupervisorName,setsupervisorName] = React.useState(null)
  const [Task,settask] = React.useState(null)


//   const [open,setOpen] = React.useState(false)
//   const handleOnSubmit = ()=>{
//      setOpen(false)
//  }
//  const handleOnCancel = ()=>{
//    setOpen(false)
//  }
//  const handleOnOpen = ()=>{
//    setOpen(true)
//  }
  
  

  const [open,setOpen] = useState(false);
  // const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    date :Date,
    time:Time,
    disc:Discription,
    stuName:StuName,
    supervisorName:SupervisorName,
    task:Task,
    
  }

  const [attendanceList,setAttendanceList] = React.useState([])

  
  const saveAttendance = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseAttendance = await axios.post("http://localhost:8080/api/attendance/add",body);
        const data = responseAttendance.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>

       <TextField onChange = {(event)=>{ setdate(event.target.value)
       }} name='date' type='date' placeholder='enter Date' label="Date" color='success' />
       
       <TextField  onChange = {(event)=>{ settime(event.target.value)
       }}  name='time' placeholder='enter  Time' label="Time" color='success' />

       <TextField onChange = {(event)=>{ setdisc(event.target.value)
       }}  name='disc' placeholder='enter Discription' label="Discription" color='success' />
       <TextField onChange = {(event)=>{ setstuName(event.target.value)
       }}  name='stuName' placeholder='enter StuName' label="StuName" color='success' />

       <TextField onChange = {(event)=>{ setsupervisorName(event.target.value)
       }}  name='supervisorName' placeholder='enter supervisorName' label="supervisorName" color='success' />

       <TextField onChange = {(event)=>{ settask(event.target.value)
       }}  name='task' type='name' placeholder='enter  Task' label="Task" color='success' />

       

       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveAttendance}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}

