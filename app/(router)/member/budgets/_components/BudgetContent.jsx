import React from 'react'
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

function BudgetContent({budget}) {
    console.log(budget)
    return (
        <div className={'grid gap-6'}>
            <div className={' grid grid-cols-1 lg:grid-cols-2 text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-t-xl lg:rounded-none lg:rounded-l-xl '}>
                    <div
                        className="mx-auto flex   flex-col gap-2">
                        <div className={'grid grid-cols-1 items-center gap-6 lg:grid-cols-2'}>
                            <h6 className={'text-gray-500 text-[10px] font-bold border border-gray-700 overflow-hidden rounded-full justify-center items-center p-2'}>Budget&nbsp;ID&nbsp;:&nbsp;{budget?.id}</h6>
                            <h3 className={' font-bold text-[15px]'}>
                                Opened Date&nbsp;:&nbsp;{budget?.openedDate}
                            </h3>
                        </div>

                        <h1 className={'font-bold text-[25px] lg:text-[30px]'}>
                            Total&nbsp;funds&nbsp; LKR&nbsp;{parseFloat(budget?.total).toFixed(2)}
                        </h1>
                    </div>
                </div>
                <div
                    className={'bg-gray-900 rounded-b-xl lg:rounded-none lg:rounded-r-xl text-gray-400 p-10 flex flex-col gap-2'}>
                    <div
                        className="mx-auto flex flex-col gap-2">
                        <div className={'grid grid-cols-1 items-center gap-6 lg:grid-cols-2'}>
                            <h2 className={'text-gray-400 text-[9px] border rounded-full overflow-hidden font-bold  justify-center items-center p-2'}>
                                Admin&nbsp;ID&nbsp;:&nbsp;{budget?.boarding?.members[0]?.systemUser?.clerkId}
                            </h2>
                            <h3 className={' font-bold text-[15px]'}>
                                Closed&nbsp;Date&nbsp;:&nbsp;{budget?.closedDate === null ? 'Not closed yet' : budget?.closedDate}
                            </h3>
                        </div>

                        <h1 className={'font-bold text-[25px] lg:text-[30px]'}>
                            Balance&nbsp;: LKR&nbsp;{
                            parseFloat(budget?.balance).toFixed(2)
                        }
                        </h1>
                    </div>
                </div>
            </div>
            <div className=" grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                <Card className=" xl:col-span-2 overflow-x-scroll">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Spending</CardTitle>
                            <CardDescription>
                                What for spend?
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        For what
                                    </TableHead>
                                    <TableHead>
                                        Description
                                    </TableHead>
                                    <TableHead>
                                        Price
                                    </TableHead>
                                    <TableHead>
                                        Date
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    budget?.spendForBudgets?.map((spend) => {
                                        return (
                                            <TableRow key={spend.id}>
                                                <TableCell>
                                                    <div className="font-medium">{spend?.forWhat}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="font-medium">{spend?.description}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="font-medium">LKR {spend?.price}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="font-medium">{spend?.date}</div>
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
            <div className=" grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                <Card className=" xl:col-span-2 overflow-x-scroll">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Funders</CardTitle>
                            <CardDescription>
                                Who funded this budget
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        Member ID
                                    </TableHead>
                                    <TableHead>
                                        Name
                                    </TableHead>
                                    <TableHead>
                                        Payment ID
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
                                    budget?.memberPayments?.map((payment) => {
                                        return <TableRow>
                                            <TableCell>
                                                <div className="font-medium">{payment?.id}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div
                                                    className="font-medium">{payment?.member?.systemUser?.firstName}&nbsp;{payment?.member?.systemUser?.lastName}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{payment?.id}</div>
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
                                                    {
                                                        payment?.painStatus === 'Paid' ?
                                                            <Badge
                                                                className={'bg-green-200 text-black'}>Paid</Badge> :
                                                            payment?.painStatus === 'Unpaid' ?
                                                                <Badge
                                                                    className={'bg-red-200 text-black'}>Unpaid</Badge> :
                                                                <Badge
                                                                    className={'bg-amber-200 text-black'}>Pending</Badge>
                                                    }
                                                </div>
                                            </TableCell>
                                        </TableRow>
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

export default BudgetContent