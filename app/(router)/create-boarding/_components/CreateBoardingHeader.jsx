'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function CreateBoardingHeader({isMember}) {

  const router=useRouter()

  useEffect(()=>{
    if(isMember) router.push('/member/dashboard');
  },[isMember])

  return (
    <div>Create Boarding</div>
  )
}

export default CreateBoardingHeader