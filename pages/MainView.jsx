import React from 'react'
import NavAndSidebar from '../utils/NavAndSidebar';
import AppContext from '../Context/AppContext';
import { useMemo } from 'react';

function MainView() {
  const [open,setOpen] = React.useState(false)
  const globalData = useMemo(() => ({
    setOpen(open){
      setOpen(open);
  },
    getOpen(){
        return open;
    },
  }), [open])
  
  return (
    <div>
      <AppContext.Provider value = {globalData}>
        <NavAndSidebar/>
      </AppContext.Provider>
    </div>
  )
}

export default MainView
