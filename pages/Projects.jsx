
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Proform from '../Component/Proform';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import AppDialog from '../utils/AppDialog';

export default function Projects() {

const [open,setOpen] = useState(false);

// const open = getOpen();

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
                    Projects
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of Projects
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='warning'>Add Project</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Project Form"} children={<Proform onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
  </Box>
    
  )
}
