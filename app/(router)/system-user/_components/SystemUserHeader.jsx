'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function SystemUserHeader({memberId}) {

  const router=useRouter()

  useEffect(()=>{
    if(memberId!=null) router.push('/member/dashboard');
  },[memberId])

  return (
    <div>SystemUserHeader {memberId}</div>
  )
}

export default SystemUserHeader