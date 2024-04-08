'use client'
import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";

function AllPaymentDetails() {
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">8uy4398uihdu3ir</div>
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
                          className={'bg-amber-100 text-black'}>Pending</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">8uy4398uihdu3ir</div>
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
                          className={'bg-red-300 text-black'}>Unpaid</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">8uy4398uihdu3ir</div>
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
                          className={'bg-amber-100 text-black'}>Pending</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <div className="font-medium">8uy4398uihdu3ir</div>
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
                        className={'bg-amber-100 text-black'}>Pending</Badge>
                  </div>
                </TableCell>
              </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">8uy4398uihdu3ir</div>
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
  )
}

export default AllPaymentDetails