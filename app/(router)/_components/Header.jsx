"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useEffect } from 'react'

function Header() {

  const {user,isLoaded}=useUser();

  return (
    <div className='flex'>
      <h1>Header</h1> 
      {
        isLoaded && user ?
        <UserButton afterSignOutUrl='/home'/> :
        <Link href={'/sign-up'}>
         <Button>Get Started</Button>
        </Link>
      }
    </div>
  )
}

export default Header