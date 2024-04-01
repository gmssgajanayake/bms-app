import {Button} from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Bell,
    BadgeDollarSign,
    Layers3,
    UserCog,
    Home,
    User,
    Archive
} from "lucide-react"

function SideNavBar({isAdmin}) {
    return (
        <div className=" hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href={"/home"} className="flex items-center gap-2 font-semibold">
                        <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5 mb-5">
                            BMS
                        </h1>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href={'/member/dashboard'}
                            className="hover:bg-muted focus:bg-muted focus:text-black  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-4 w-4"/>
                            Dashboard
                        </Link>
                        <Link
                            href={"/member/profile"}
                            className="hover:bg-muted focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            {/*<ShoppingCart className="h-4 w-4"/>*/}

                            <User className="h-4 w-4" />
                            My Profile
                        </Link>
                        <Link
                            href={"/member/boarding"}
                            className="hover:bg-muted focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Archive className="h-4 w-4"/>
                            Boarding
                        </Link>
                        <Link
                            href={"/member/budgets"}
                            className="hover:bg-muted focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Layers3 className="h-4 w-4"/>
                            Budget
                        </Link>
                        <Link
                            href={"/member/payments"}
                            className="hover:bg-muted focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <BadgeDollarSign className="h-4 w-4"/>
                            Payments
                        </Link>
                        {
                            isAdmin &&

                        <Link
                            href={"/member/admin"}
                            className="hover:bg-muted focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <UserCog className="h-4 w-4"/>
                            Admin Panel
                        </Link>
                        }
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card>
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        // <div>
        //     <Link href={'/member/dashboard'}>
        //         <Button variant="secondary" className='m-6'>Dashboard</Button>
        //     </Link>
        //
        //     <Link href={'/member/profile'}>
        //         <Button variant="secondary" className='m-6'>Profile</Button>
        //     </Link>
        //
        //     <Link href={'/member/boarding'}>
        //         <Button variant="secondary" className='m-6'>Boarding</Button>
        //     </Link>
        //
        //     <Link href={'/member/payments'}>
        //         <Button variant="secondary" className='m-6'>Payments</Button>
        //     </Link>
        //
        //     <Link href={'/member/budgets'}>
        //         <Button variant="secondary" className='m-6'>Budgets</Button>
        //     </Link>
        //     {
        //         isAdmin &&
        //         <Link href={'/member/admin'}>
        //             <Button variant="secondary" className='m-6 bg-red-600'>Admin Panle</Button>
        //         </Link>
        //     }
        // </div>
    )
}

export default SideNavBar