import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AppDialog({open,title,children}) {
  
  

  return (
    <div>
      
      <Dialog
        
        open={open}
    
        fullWidth
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent >
          {children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
