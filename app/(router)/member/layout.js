import React from 'react'
import SideNavBar from './_components/SideNavBar'
import {currentUser} from "@clerk/nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";

async function layout({children}) {
    const userData = await currentUser();
    let isAdmin;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isAdmin = resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })


    return (

        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <SideNavBar isAdmin={isAdmin}/>
            {children}
        </div>
    )
}

export default layout
