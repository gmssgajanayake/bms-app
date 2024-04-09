'use client'
import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";


function RequestManageArea({allRequest, boardingId, isAvailable}) {
    const router = useRouter();

    async function accept(clerkId, boardingId, requestId) {
        console.log(boardingId)
        await GlobalApi.acceptRequest(clerkId, boardingId, requestId).then(resp => {
            router.refresh();
        }).catch(error => {
            console.log(error.message)
        })
    }

    async function reject(requestId) {
        await GlobalApi.rejectRequest(requestId).then(resp => {
            router.refresh();
        }).catch(error => {
            console.log(error.message)
        })
    }

    async function changeAvailability(boardingId, availability) {
        await GlobalApi.updateBoardingAvailability(boardingId, availability).then(resp => {
            router.refresh();
        }).catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className={'grid gap-6'}>
            <div className={' grid grid-cols-1 items-center  text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
                    <div
                        className="mx-auto grid grid-cols-1  items-center gap-6">
                        <h1 className={'font-bold text-[25px] lg:text-[30px] uppercase'}>
                            Is available to join ?
                        </h1>
                        <Select onValueChange={(value) => {
                            value === 'Yes' ? changeAvailability(boardingId, true) : changeAvailability(boardingId, false)
                        }}>
                            <SelectTrigger className="w-[200px] lg:w-[280px]">
                                <SelectValue placeholder={isAvailable ? 'Yes, Anyone can request to\n' +
                                    '                                    join' : 'No, can\'t request to\n'}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Yes">Yes, Anyone can request to
                                    join</SelectItem>
                                <SelectItem value="No">No, can't request to
                                    join</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className=" lg:h-[900px] overflow-x-scroll grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                <Card className=" xl:col-span-2 overflow-x-scroll">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Requests to join</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        User ID
                                    </TableHead>
                                    <TableHead>
                                        Name&nbsp;of&nbsp;User
                                    </TableHead>
                                    <TableHead>
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    allRequest.map((request) => {
                                        return (
                                            <TableRow key={request.id}>
                                                <TableCell className={'items-center'}>
                                                    <div className="font-medium">{request?.systemUser?.clerkId}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div
                                                        className="font-medium">{request?.systemUser?.firstName + ' ' + request?.systemUser?.lastName}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div
                                                        className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-20 items-center justify-center '}>
                                                        <Button onClick={
                                                            () => {
                                                                accept(request?.systemUser?.clerkId, boardingId, request?.id)
                                                            }
                                                        }
                                                                className={'pl-8 pr-8'}>Accept</Button>
                                                        <Button onClick={
                                                            () => {
                                                                reject(request?.id)
                                                            }
                                                        }
                                                                className={'pl-8 pr-8'}>Reject</Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default RequestManageArea