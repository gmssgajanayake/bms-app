'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function MemberHeader({isMember, isAdmin, fileName}) {

    const router = useRouter()
    useEffect(() => {
        router.push(!isMember?'/system-user':fileName === 'admin'?
            (!isAdmin?'/member/dashboard':'/member/admin'):
            '/member/'+fileName);

    }, [isMember])

    return (
        <div>MemberHeader {isMember}</div>
    )
}

export default MemberHeader