'use client'
import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";

function AllPaymentDetails({memberPayments}) {
  const router = useRouter();
  return (
      <div className=" m-6 grid gap-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2">
        <Card className=" xl:col-span-2 overflow-x-scroll">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Your Payments</CardTitle>
              <CardDescription>
                All payments of you made
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>
                    Budget ID
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
                  memberPayments?.map((payment)=>{
                    return (
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">{payment?.id}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{payment?.budget?.id}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">LKR {parseFloat(payment?.price).toFixed(2)}</div>
                          </TableCell>

                          <TableCell>
                            <div className="font-medium">{payment?.paidDate}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium gap-4">{
                              payment?.painStatus === 'Pending' ?
                              <Badge
                                  className={'bg-amber-200 text-black'}>Pending</Badge>
                              :  payment?.painStatus === 'Paid' ?
                              <Badge
                                  className={'bg-green-200 text-black'}>Paid</Badge>:
                              <Badge
                                  className={'bg-red-200 text-black'}>Unpaid</Badge>
                            }
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
  )
}

export default AllPaymentDetails