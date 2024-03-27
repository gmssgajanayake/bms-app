'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {Menu} from "lucide-react"
import {UserButton, useUser} from "@clerk/nextjs";

function FindBoardingHeader({isMember}) {

  const {user,isLoaded}=useUser();
  const router=useRouter()

  useEffect(()=>{
    if(isMember) router.push('/member/dashboard');
  },[isMember])

  return (
      <header  className=" z-50 sticky top-0 flex h-16 items-center gap-4 bg-white px-4 md:px-6">
        <nav
            className="0 hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
              href="/home"
              className="w-[80px] h-auto flex items-center justify-center gap-2 text-lg font-semibold md:text-base"
          >

            <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5 mb-5">
              BMS
            </h1>
          </Link>
          <Link
              href="../home#contact"
              className="text-foreground transition-colors hover:text-foreground"
          >
          </Link>
          <Link
              href="../home"
              className="text-muted-foreground transition-colors hover:text-foreground"
          >

          </Link>
          <Link
              href="../home"
              className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
              href="../home#benefits"
              className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Benefits
          </Link>
          <Link
              href="../home#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About&nbsp;us
          </Link>
          <Link
              href="../home#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5"/>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                  href="../home"
                  className="flex items-center gap-2 text-lg font-semibold"
              >
                <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5 mb-5">
                  BMS
                </h1>
              </Link>
              <Link href="../home" className="hover:text-foreground">
                Home
              </Link>
              <Link
                  href="../home#benefits"
                  className="text-muted-foreground hover:text-foreground"
              >
                Benefits
              </Link>
              <Link
                  href="../home#admin"
                  className="text-muted-foreground hover:text-foreground"
              >
                Admin&nbsp;roll
              </Link>
              <Link
                  href="../home#contact"
                  className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
          </form>
          {
            isLoaded && user ?
                <div className={' w-10 h-10 rounded-full border-black-200 border-4 flex items-center justify-center '}>
                  <UserButton afterSignOutUrl='/home'/>
                </div>
                :
                <Link href={'/sign-up'}>
                  <Button>Get Started</Button>
                </Link>
          }
        </div>
      </header>
  )
}

export default FindBoardingHeader