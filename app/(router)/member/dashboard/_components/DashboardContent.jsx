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
import {log} from "next/dist/server/typescript/utils";


function DashboardContent({
                              allMemberPayments,
                              imageUrl,
                              name,
                              memberId,
                              isAdmin,
                              openedDate,
                              closedDate,
                              balance,
                              total,
                              lastBudget,
                              lastBudgetSpends
                          }) {

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
            <div className="flex flex-1 h-fit bg-black  items-center  justify-between rounded-lg shadow-md">
                <div className="md:flex ">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 rounded-t-xl sm:rounded-t-xl lg:rounded-l-xl md:rounded-r-none  w-full object-cover md:h-full md:w-48"
                            src={imageUrl}
                            alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg text-indigo-400 font-semibold">
                            {name}
                        </div>
                        <h2
                            className="block mt-1 text-md leading-tight font-medium text-gray-400 ">Member ID :
                            {memberId}</h2>
                        <h4 className="mt-2 text-slate-500 text-md flex gap-4">Membership : <div>
                            {
                                isAdmin ? <Badge className={'bg-pink-600'}>Admin</Badge> : <Badge
                                    className={'bg-purple-600'}>Member</Badge>
                            }

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
                        <div className="text-2xl font-bold">LKR {parseFloat(total).toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">
                            Started Date : {openedDate}
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
                        <div className="text-2xl font-bold">LKR {parseFloat(balance).toFixed(2)}</div>
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
                        <div className="text-2xl font-bold">LKR {parseFloat(lastBudget).toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">
                            End Date : {closedDate}
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

                                {
                                    lastBudgetSpends && lastBudgetSpends.map((spend) => {
                                        return <TableRow>
                                            <TableCell>
                                                <div className="font-medium">{spend?.forWhat}</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    {spend?.description}
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
                                            <TableCell
                                                className="text-right font-medium">LKR {parseFloat(spend?.price).toFixed(2)}</TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className={'xl:col-span-2'}>
                    <CardHeader>
                        <CardTitle>Recent Funds</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                        {
                            allMemberPayments && allMemberPayments.map((payment) => {
                                return payment?.painStatus === 'Paid' && <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                        <AvatarFallback>{payment?.member?.systemUser?.firstName[0] + "" + payment?.member?.systemUser?.lastName[0] || ""}</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            {payment?.member?.systemUser?.firstName}&nbsp;{payment?.member?.systemUser?.lastName}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {payment?.paidDate}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">LKR {parseFloat(payment?.price).toFixed(2)}</div>
                                </div>
                            })
                        }
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default DashboardContent