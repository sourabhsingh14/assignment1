import React from 'react'
import '../components/css//Mainscreen.css'
import MainScreenFooter from './MainScreenFooter'
import MainscreenHeader from './MainscreenHeader'
import Table from './Table'

function Mainscreen() {

  

    return (
        <div className="mainscreen">
          <MainscreenHeader />
            <Table />
          <MainScreenFooter/>
        </div>
    )
}

export default Mainscreen
