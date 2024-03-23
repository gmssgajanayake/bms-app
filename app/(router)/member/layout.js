import React from 'react'
import SideNavBar from './_components/SideNavBar'
import {currentUser} from "@clerk/nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";

async function layout({children}) {
    const userData = await currentUser();
    let isAdmin;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isAdmin=resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })


  return (
    <div>Member layout
     <SideNavBar isAdmin={isAdmin}/>
     {children}
    </div>
  )
}

export default layout