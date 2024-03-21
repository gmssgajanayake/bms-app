import React from 'react'
import SideNavBar from './_components/SideNavBar'

function layout({children}) {
  return (
    <div>Member layout
     <SideNavBar/>
     {children}
    </div>
  )
}

export default layout