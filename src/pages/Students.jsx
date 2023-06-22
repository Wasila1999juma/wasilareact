
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StuForm from '../Component/Stuform';
import AppContext from '../Context/AppContext';
import { useContext, useEffect,useState} from 'react';
import AppDialog from '../utils/AppDialog';
import axios from 'axios';
export default function Students() {

// const {getOpen,setOpen} = useContext(AppContext);

// const open = getOpen();

//  const handleOnSubmit = ()=>{
//     setOpen(false)
// }
// const handleOnCancel = ()=>{
//   setOpen(false)
// }
// const handleOnOpen = ()=>{
//   setOpen(true)
// }

const [settudent, setStudent] = useState([]);
useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
try {
const response = await axios.get('http://localhost:8080/api/student/all');
setStudent(response.data);
}catch(error){
console.log('error fetching data: ' , error);
}
};








const [open,setOpen] = React.useState(false)
const handleOnSubmit = ()=>{
   setOpen(false)
}
const handleOnCancel = ()=>{
 setOpen(false)
}
const handleOnOpen = ()=>{
 setOpen(true)
}


      
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={9}>
      <Stack justifyContent={'left'}>
            <Typography variant="h5" component="div">
                    Students
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of students
                  
                  
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='warning'>Add Student</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Student Form"} children={<StuForm onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
    
  </Box>


  
  )
}
