import {Button} from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {Badge} from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
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
        <div className="   hidden border-r bg-muted/40 md:block overflow-hidden ">
            <div className=" flex fixed h-full max-h-screen flex-col gap-2">
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
                            className="hover:bg-muted w-[200px] lg:w-[250px] focus:bg-muted focus:text-black  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-5 w-5"/>
                            Dashboard
                        </Link>
                        <Link
                            href={"/member/profile"}
                            className="hover:bg-muted  w-[200px] lg:w-[250px] focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            {/*<ShoppingCart className="h-4 w-4"/>*/}

                            <User className="h-5 w-5"/>
                            My Profile
                        </Link>
                        <Link
                            href={"/member/boarding"}
                            className="hover:bg-muted  w-[200px] lg:w-[250px] focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Archive className="h-5 w-5"/>
                            Boarding
                        </Link>
                        <Link
                            href={"/member/budgets"}
                            className="hover:bg-muted  w-[200px] lg:w-[250px] focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Layers3 className="h-5 w-5"/>
                            Budget
                        </Link>
                        <Link
                            href={"/member/payments"}
                            className="hover:bg-muted  w-[200px] lg:w-[250px] focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <BadgeDollarSign className="h-5 w-5"/>
                            Payments
                        </Link>
                        {
                            isAdmin &&

                            <Link
                                href={"/member/admin"}
                                className="hover:bg-muted  w-[200px] lg:w-[250px] focus:bg-muted focus:text-black flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <UserCog className="h-5 w-5"/>
                                Admin Panel
                            </Link>
                        }
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Sheet>
                        <Card>
                            <CardHeader className=" w-[200px] lg:w-[250px] p-2 pt-0 md:p-4">
                                <CardTitle>How to use?</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}

export default SideNavBar