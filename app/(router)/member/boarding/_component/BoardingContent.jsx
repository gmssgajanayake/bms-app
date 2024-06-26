import React from 'react'
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";


function BoardingContent({data}) {


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
            <div className=" flex flex-1 h-fit bg-black items-center lg:p-6  justify-between rounded-lg shadow-md">
                <div className="md:flex ">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 rounded-t-xl sm:rounded-t-xl lg:rounded-l-xl md:rounded-r-none  w-full object-cover md:h-full md:w-48"
                            src={'/boarding-db.png'}
                            alt="Modern building architecture"/>
                    </div>
                    <div className="p-8 gap-1 flex flex-col">
                        <div className="uppercase tracking-wide text-lg text-indigo-400 font-semibold">
                            {data?.boarding?.name}
                        </div>
                        <div className="uppercase tracking-wide text-muted-foreground text-indigo-400 font-semibold">
                            {data?.boarding?.address}
                        </div>
                        <h2
                            className="block mt-1 text-md leading-tight font-medium text-gray-400 ">Boarding
                            ID  &nbsp;:&nbsp;
                            {data?.boarding?.id}</h2>
                        <h2
                            className="block mt-1 text-md leading-tight font-medium text-gray-400 ">Admin
                            ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;
                            {data?.boarding?.members.find(member => member.adminStatus)?.systemUser?.clerkId}</h2>
                        <h4 className="mt-2 text-slate-500 text-md flex gap-2">Availability to Join : <div>

                            {data?.boarding?.availability ?
                                <Badge className={'bg-green-600'}>Available now</Badge> :
                                <Badge className={'bg-pink-600'}>Not Available</Badge>}
                        </div></h4>
                    </div>
                </div>
            </div>
            <div className=" grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                <Card className=" xl:col-span-2 overflow-x-scroll">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Members Details</CardTitle>
                            <CardDescription>
                                Current members of the boarding
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Member ID</TableHead>
                                    <TableHead>
                                        Name and Email
                                    </TableHead>
                                    <TableHead>
                                        Membership
                                    </TableHead>
                                    <TableHead>
                                        Address
                                    </TableHead>
                                    <TableHead>
                                        Contact
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    data?.boarding?.members.map((member) => {
                                        return <TableRow>
                                            <TableCell>
                                                <div className="font-medium">{member?.systemUser?.clerkId}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div
                                                    className="font-medium">{member?.systemUser?.firstName}&nbsp;{member?.systemUser?.lastName}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {member?.systemUser?.email}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium gap-4">
                                                    {
                                                        member?.adminStatus ?
                                                            <Badge
                                                                className={'bg-pink-600 hover:bg-pink-600'}>Admin</Badge> :
                                                            <Badge
                                                                className={'bg-purple-600 hover:bg-purple-600'}>Member</Badge>
                                                    }
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                <div
                                                    className="font-medium">{member?.systemUser?.address === '' ? "-" : member?.systemUser?.address}</div>
                                            </TableCell>

                                            <TableCell>
                                                <div
                                                    className="font-medium">{member?.systemUser?.contactNumber === null ? "-" : member?.systemUser?.contactNumber}</div>
                                            </TableCell>

                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default BoardingContent