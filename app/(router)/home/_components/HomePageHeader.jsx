"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React, {useEffect, useRef} from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"

import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import {router} from "next/client";
import {useRouter} from "next/navigation";

function HomePageHeader() {

    const {user,isLoaded}=useUser();
    const router = useRouter();

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ?
                headerRef.current.classList.add('sticky_header') :
                headerRef.current.classList.remove('sticky_header');
        });
    }

    useEffect(()=>{
        stickyHeaderFunc();
        return window.removeEventListener('scroll',stickyHeaderFunc);
    },[]);

    const handleClick = e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top:location-80,
            left:0
        });
    }


    return (
        <div className="z-50 flex min-h-screen w-full flex-col fixed">
            <header ref={headerRef} className="z-50 sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
                <nav ref={menuRef} onClick={toggleMenu}
                    className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link onClick={()=>{router.push('/home')}}
                        href="#"
                        className="w-[80px] h-auto flex items-center justify-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Image onClick={()=>router.push('/home')} className={'cursor-pointer'} src={'/BMS-logo.png'}
                               width={100} height={80} alt="logo"/>
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="#contact"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >

                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Home
                    </Link>
                    <Link
                        href="#benefits"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Benefits
                    </Link>
                    <Link
                        href="#about"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        About&nbsp;us
                    </Link>
                    <Link
                        href="#contact"
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
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Image src={'/BMS-logo.png'}
                                       width={60} height={40} alt="logo"/>
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link href="#" className="hover:text-foreground">
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Benefits
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                About&nbsp;us
                            </Link>
                            <Link
                                href="#"
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
                            <div  className={'w-10 h-10 rounded-full border-black-200 border-4 flex items-center justify-center '}>
                                <UserButton afterSignOutUrl='/home'/>
                            </div>
                             :
                            <Link href={'/sign-up'}>
                                <Button>Get Started</Button>
                            </Link>
                    }
                </div>
            </header>
        </div>
    )
}

export default HomePageHeader