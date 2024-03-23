'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function SystemUserHeader({isMember}) {

  const router=useRouter()

  useEffect(()=>{
    if(isMember) router.push('/member/dashboard');
  },[isMember])

  return (
    <div>SystemUserHeader {isMember}</div>
  )
}

export default SystemUserHeader