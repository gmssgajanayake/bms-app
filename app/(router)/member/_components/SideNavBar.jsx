import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function SideNavBar() {
  return (
    <div>
     <Link href={'/member/dashboard'}>
          <Button variant="secondary" className='m-6'>Dashboard</Button>
     </Link>

     <Link href={'/member/profile'}>
          <Button variant="secondary" className='m-6'>Profile</Button>
     </Link>

     <Link href={'/member/boarding'}>
           <Button variant="secondary" className='m-6'>Boarding</Button>
     </Link>

     <Link href={'/member/payments'}>
          <Button variant="secondary" className='m-6'>Payments</Button>
     </Link>

     <Link href={'/member/budgets'}>
          <Button variant="secondary" className='m-6'>Budgets</Button>
     </Link>

     <Link href={'/member/admin'}>
           <Button variant="secondary" className='m-6 bg-red-600'>Admin Panle</Button>
     </Link>
   
    
   
     
    
    </div>
  )
}

export default SideNavBar