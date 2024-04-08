import React from 'react'
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

function BudgetContent() {
    return (
        <div className={'grid gap-6'}>
            <div className={' grid grid-cols-1 lg:grid-cols-2 text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-t-xl lg:rounded-none lg:rounded-l-xl '}>
                    <div
                        className="mx-auto flex   flex-col gap-2">
                        <div className={'grid grid-cols-1 items-center gap-6 lg:grid-cols-2'}>
                            <Badge variant="outline" className={'text-gray-800 justify-center items-center p-2'}>Budget
                                ID
                                :
                                jiuxhe394fjbfciuew</Badge>
                            <h3 className={' font-bold text-[15px]'}>
                                Opened Date : 2023-01-01
                            </h3>
                        </div>

                        <h1 className={'font-bold text-[25px] lg:text-[30px]'}>
                            Total funds : LKR 7000.00
                        </h1>
                    </div>
                </div>
                <div
                    className={'bg-gray-900 rounded-b-xl lg:rounded-none lg:rounded-r-xl text-gray-400 p-10 flex flex-col gap-2'}>
                    <div
                        className="mx-auto flex flex-col gap-2">
                        <div className={'grid grid-cols-1 items-center gap-6 lg:grid-cols-2'}>
                            <Badge variant="outline" className={'text-gray-400 p-10 justify-center items-center p-2'}>Admin
                                ID
                                :
                                jiuxhe394fjbfciuew</Badge>
                            <h3 className={' font-bold text-[15px]'}>
                                Closed Date : 2023-01-01
                            </h3>
                        </div>

                        <h1 className={'font-bold text-[25px] lg:text-[30px]'}>
                            Balance : LKR 7000.00
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
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Rice</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">Star food</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Rice</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">Star food</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Rice</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">Star food</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Rice</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">Star food</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Rice</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">Star food</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                </TableRow>

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
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">8uy4398uihdu3ir</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">G.M.Sakuja Shamal</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">jf9384fj349f3rv</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium gap-4">
                                            <Badge
                                                className={'bg-green-200 text-black'}>Paid</Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">8uy4398uihdu3ir</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">G.M.Sakuja Shamal</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">jf9384fj349f3rv</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium gap-4">
                                            <Badge
                                                className={'bg-green-200 text-black'}>Paid</Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">8uy4398uihdu3ir</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">G.M.Sakuja Shamal</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">jf9384fj349f3rv</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium gap-4">
                                            <Badge
                                                className={'bg-green-200 text-black'}>Paid</Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">8uy4398uihdu3ir</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">G.M.Sakuja Shamal</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">jf9384fj349f3rv</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium gap-4">
                                            <Badge
                                                className={'bg-green-200 text-black'}>Paid</Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">8uy4398uihdu3ir</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">G.M.Sakuja Shamal</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">jf9384fj349f3rv</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">LKR 2900.00</div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium">23/02/2024</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium gap-4">
                                            <Badge
                                                className={'bg-green-200 text-black'}>Paid</Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}

export default BudgetContent