'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

function FindBoardingHeader({isMember}) {

  const router=useRouter()

  useEffect(()=>{
    if(isMember) router.push('/member/dashboard');
  },[isMember])

  return (
    <div>Find Boarding</div>
  )
}

export default FindBoardingHeader