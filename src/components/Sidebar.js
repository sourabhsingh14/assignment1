import React from 'react'
import '../components/css/Sidebar.css'
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'
import Sidebaroptions from './Sidebaroptions'



 function Sidebar(){
    return (
        <div className='sidebar' >
           <SidebarHeader />
        <Sidebaroptions />
      <SidebarFooter />
        </div>
    )}


export default Sidebar
