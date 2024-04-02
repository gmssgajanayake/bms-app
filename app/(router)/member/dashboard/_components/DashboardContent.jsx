import React from 'react'
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import {
    Activity,
    ArrowUpRight,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


function DashboardContent(imageUrl) {

    // Array of weekday names
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the current date
    const today = new Date();

// Extracting the day, month, and year
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();
    const weekdayIndex = today.getDay();

// Formatting the date
    const formattedDate = `${weekdays[weekdayIndex]} ${day} ${months[monthIndex]} ${year}`;

    return (
        <main className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex flex-1 h-fit bg-black  items-center ml-2 mr-2  justify-between rounded-lg shadow-md">
                <div className="md:flex ">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 rounded-t-xl sm:rounded-t-xl lg:rounded-l-xl md:rounded-r-none  w-full object-cover md:h-full md:w-48"
                            src={imageUrl.imageUrl}
                            alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg text-indigo-400 font-semibold">
                            G.M.Sakuja Shamal Gajanayake
                        </div>
                        <h2
                            className="block mt-1 text-md leading-tight font-medium text-gray-400 ">Member ID :
                            jde8349hfdui34fbh38u4bf</h2>
                        <h4 className="mt-2 text-slate-500 text-md flex gap-2">Membership : <div><Badge
                            className={'bg-purple-600'}>Member</Badge> <Badge
                            className={'bg-pink-600'}>Admin</Badge>
                        </div></h4>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Funds
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">LKR 7500.00</div>
                        <p className="text-xs text-muted-foreground">
                            Started Date : {formattedDate}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Budget Balance
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">LKR 4588.00</div>
                        <p className="text-xs text-muted-foreground">
                            {formattedDate}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                           Last Budget
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">LKR 10500.00</div>
                        <p className="text-xs text-muted-foreground">
                           End Date : {formattedDate}
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="xl:col-span-2">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Last Payments</CardTitle>
                            <CardDescription>
                                Recent spends from the budget.
                            </CardDescription>
                        </div>
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <Link href="/member/budgets">
                                View All
                                <ArrowUpRight className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Type
                                    </TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Status
                                    </TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-23
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Olivia Smith</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            olivia@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Refund
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Declined
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-24
                                    </TableCell>
                                    <TableCell className="text-right">$150.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Noah Williams</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            noah@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Subscription
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-25
                                    </TableCell>
                                    <TableCell className="text-right">$350.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Emma Brown</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            emma@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-26
                                    </TableCell>
                                    <TableCell className="text-right">$450.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-27
                                    </TableCell>
                                    <TableCell className="text-right">$550.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className={'xl:col-span-2'}>
                    <CardHeader>
                        <CardTitle>Recent Funds</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Olivia Martin
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    olivia.martin@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$1,999.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/02.png" alt="Avatar"/>
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Jackson Lee
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    jackson.lee@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$39.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/03.png" alt="Avatar"/>
                                <AvatarFallback>IN</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Isabella Nguyen
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    isabella.nguyen@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$299.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/04.png" alt="Avatar"/>
                                <AvatarFallback>WK</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    William Kim
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    will@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$99.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/05.png" alt="Avatar"/>
                                <AvatarFallback>SD</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Sofia Davis
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    sofia.davis@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+$39.00</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
        // <div className="flex flex-1 h-fit bg-black  items-center ml-6 mr-6  justify-between rounded-lg shadow-md">
        //     <div className="md:flex ">
        //         <div className="md:shrink-0">
        //             <img
        //                 className="h-48 sm:rounded-t-xl lg:rounded-l-xl md:rounded-r-none  w-full object-cover md:h-full md:w-48"
        //                 src={imageUrl.imageUrl}
        //                 alt="Modern building architecture"/>
        //         </div>
        //         <div className="p-8">
        //             <div className="uppercase tracking-wide text-lg text-indigo-400 font-semibold">
        //                 G.M.Sakuja Shamal Gajanayake
        //             </div>
        //             <h2
        //                 className="block mt-1 text-md leading-tight font-medium text-gray-400 ">Member ID :
        //                 jde8349hfdui34fbh38u4bf</h2>
        //             <h4 className="mt-2 text-slate-500 text-md flex gap-2">Membership : <div><Badge
        //                 className={'bg-purple-600'}>Member</Badge> <Badge className={'bg-pink-600'}>Admin</Badge>
        //             </div></h4>
        //         </div>
        //     </div>
        // </div>

    )
}

export default DashboardContent