'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function MemberHeader({isMember,fileName}) {

    const router=useRouter()

    useEffect(()=>{
        router.push(!isMember?'/system-user':'/member/'+fileName);
    },[isMember])

    return (
        <div>MemberHeader {isMember}</div>
    )
}

export default MemberHeader