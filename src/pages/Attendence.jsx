
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import AttendForm from '../Component/AttendForm';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import AppDialog from '../utils/AppDialog';

export default function Attendance() {

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
                    Attendance
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of Attendance
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='warning'>Add Attendance</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Attendance Form"} children={<AttendForm onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
  </Box>
    
  )
}
