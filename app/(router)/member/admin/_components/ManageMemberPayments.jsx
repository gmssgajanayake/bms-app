'use client'
import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useRouter} from "next/navigation";
import GlobalApi from "@/app/_utils/GlobalApi";

function ManageMemberPayments({allMemberPayments, budgetId, total, balance}) {

    const router = useRouter();
    let isLoaded = true;

    async function updateMemberPaymentStatus(paymentId, status, previousStatus) {
        await GlobalApi.updateMemberPaymentStatus(paymentId, status).then(async (resp) => {
            if (status === 'Paid' && previousStatus !== 'Paid') {
                total += resp?.updateMemberPayment?.price
                balance += resp?.updateMemberPayment?.price
                await GlobalApi.updateBudget(
                    budgetId,
                    parseFloat(total).toFixed(2), parseFloat(balance).toFixed(2)).then(
                    () => {
                        router.refresh();
                    }
                ).catch(error => {
                    console.log(error.message)
                })
            } else if ((status === 'Unpaid' || status === 'Pending') && (previousStatus === 'Paid')) {
                total -= resp?.updateMemberPayment?.price
                balance -= resp?.updateMemberPayment?.price
                await GlobalApi.updateBudget(
                    budgetId,
                    parseFloat(total).toFixed(2), parseFloat(balance).toFixed(2)).then(
                    () => {
                        router.refresh();
                    }
                ).catch(error => {
                    console.log(error.message)
                })
            } else {
                router.refresh();
            }
        }).catch(error => {
            console.log(error.message)
        })
    }



    return (
        <div className=" m-6 grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
            <Card className=" xl:col-span-2 overflow-x-scroll">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Members Payments</CardTitle>
                        <CardDescription>
                            All payments of members
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Payment ID</TableHead>
                                <TableHead>
                                    Member ID
                                </TableHead>
                                <TableHead>
                                    Name
                                </TableHead>
                                <TableHead>
                                    Price
                                </TableHead>
                                <TableHead>
                                    Date
                                </TableHead>
                                <TableHead>
                                    Paid Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                allMemberPayments && allMemberPayments.map(payment => {
                                        return <TableRow>
                                            <TableCell>
                                                <div className="font-medium">{payment?.id}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div
                                                    className="font-medium">{payment?.member?.systemUser !== null ? payment?.member?.systemUser?.clerkId :
                                                    <h2 className={'text-red-500'}>Currently&nbsp;Not&nbsp;Available</h2>}</div>
                                            </TableCell>

                                            <TableCell>
                                                <div
                                                    className="font-medium">{payment?.member?.systemUser !== null ? payment?.member?.systemUser?.firstName :
                                                    <h2 className={'flex justify-center items-center'}>_</h2>}&nbsp;{payment?.member?.systemUser?.lastName}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div
                                                    className="font-medium">LKR&nbsp;{parseFloat(payment?.price).toFixed(2)}</div>
                                            </TableCell>

                                            <TableCell>
                                                <div
                                                    className="font-medium">{(payment?.paidDate).split(' ')[0]}&nbsp;{(payment?.paidDate).split(' ')[1]}&nbsp;{(payment?.paidDate).split(' ')[2]}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium gap-4">
                                                    {isLoaded ?
                                                        <Select
                                                            onValueChange={value => {
                                                                updateMemberPaymentStatus(payment?.id, value, payment?.painStatus).then(async ()=>{
                                                                   await router.refresh();
                                                                })
                                                            }}>
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder={payment?.painStatus}/>
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Paid">Paid</SelectItem>
                                                                <SelectItem value="Unpaid">Unpaid</SelectItem>
                                                                <SelectItem value="Pending">Pending</SelectItem>
                                                            </SelectContent>
                                                        </Select> :
                                                        <Select disabled={true}
                                                            onValueChange={value => updateMemberPaymentStatus(payment?.id, value, payment?.painStatus)}>
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder={payment?.painStatus}/>
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Paid">Paid</SelectItem>
                                                                <SelectItem value="Unpaid">Unpaid</SelectItem>
                                                                <SelectItem value="Pending">Pending</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    }
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    }
                                )
                            }

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default ManageMemberPayments