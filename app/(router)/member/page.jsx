"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function page() {
     const router=useRouter()

     useEffect(()=>{
          router.push('/member/dashboard');
     },[])

  return null;
}

export default page