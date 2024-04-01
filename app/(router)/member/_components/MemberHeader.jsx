'use client'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
    Archive, BadgeDollarSign,
    Bell,
    CircleUser,
    Home, Layers3,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart, User, UserCog,
    Users,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {UserButton} from "@clerk/nextjs";

function MemberHeader({isMember, isAdmin, fileName}) {
    const router = useRouter()
    useEffect(() => {
        router.push(!isMember?'/system-user':fileName === 'admin'?
            (!isAdmin?'/member/dashboard':'/member/admin'):
            '/member/'+fileName);

    }, [isMember])

    return (
        <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
                    <SheetContent side="left" className="flex flex-col">
                        <nav className="grid gap-2 text-lg font-medium">
                            <Link
                                href={'/home'}
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5 mb-5">
                                    BMS
                                </h1>
                            </Link>
                            <Link
                                href={'/member/dashboard'}
                                className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Home className="h-5 w-5"/>
                                Dashboard
                            </Link>
                            <Link
                                href={"/member/profile"}
                                className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <User className="h-4 w-4" />
                                My Profile
                            </Link>
                            <Link
                                href={"/member/boarding"}
                                className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Archive className="h-4 w-4"/>
                                Boarding
                            </Link>
                            <Link
                                href={"/member/budgets"}
                                className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Layers3 className="h-4 w-4"/>
                                Budget
                            </Link>
                            <Link
                                href={"/member/payments"}
                                className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <BadgeDollarSign className="h-4 w-4"/>
                                Payments
                            </Link>
                            {
                                isAdmin &&

                                <Link
                                    href={"/member/admin"}
                                    className="hover:bg-muted focus:bg-muted focus:text-black  mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <UserCog className="h-4 w-4"/>
                                    Admin Panel
                                </Link>
                            }




                        </nav>
                        <div className="mt-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>
                                        Unlock all features and get unlimited access to our
                                        support team.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button size="sm" className="w-full">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="w-full flex-1">
                    {/*<form>*/}
                    {/*    <div className="relative">*/}
                    {/*        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>*/}
                    {/*        <Input*/}
                    {/*            type="search"*/}
                    {/*            placeholder="Search products..."*/}
                    {/*            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
                <div className={'w-10 h-10 rounded-full border-black-200 border-4 flex items-center justify-center '}>
                    <UserButton afterSignOutUrl='/home'/>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex items-center">
                    <h1 className="text-lg font-semibold md:text-2xl">{fileName.charAt(0).toUpperCase() + fileName.slice(1)}</h1>
                </div>

                {/*<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">*/}
                {/*    <div className="flex flex-col items-center gap-1 text-center">*/}
                {/*        <h3 className="text-2xl font-bold tracking-tight">*/}
                {/*            You have no products*/}
                {/*        </h3>*/}
                {/*        <p className="text-sm text-muted-foreground">*/}
                {/*            You can start selling as soon as you add a product.*/}
                {/*        </p>*/}
                {/*        <Button className="mt-4">Add Product</Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </main>
        </div>
    )
}

export default MemberHeader