import React from 'react'
import {Badge} from "@/components/ui/badge";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function ManageMemberPayments() {
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
                          <TableRow>
                              <TableCell>
                                  <div className="font-medium">8uy4398uihdu3ir</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">jf9384fj349f3rv</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">Sakuja Shamal</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">LKR 2900.00</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">23/02/2024</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium gap-4">
                                      <Select>
                                          <SelectTrigger className="w-[180px]">
                                              <SelectValue placeholder="Pending" />
                                          </SelectTrigger>
                                          <SelectContent>
                                                  <SelectItem value="paid">Paid</SelectItem>
                                                  <SelectItem value="Unpaid">Unpaid</SelectItem>
                                                  <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                      </Select>
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
                                  <div className="font-medium">Sakuja Shamal</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">LKR 2900.00</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">23/02/2024</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium gap-4">
                                      <Select>
                                          <SelectTrigger className="w-[180px]">
                                              <SelectValue placeholder="Pending" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="paid">Paid</SelectItem>
                                              <SelectItem value="Unpaid">Unpaid</SelectItem>
                                              <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                      </Select>
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
                                  <div className="font-medium">Sakuja Shamal</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">LKR 2900.00</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">23/02/2024</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium gap-4">
                                      <Select>
                                          <SelectTrigger className="w-[180px]">
                                              <SelectValue placeholder="Pending" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="paid">Paid</SelectItem>
                                              <SelectItem value="Unpaid">Unpaid</SelectItem>
                                              <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                      </Select>
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
                                  <div className="font-medium">Sakuja Shamal</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">LKR 2900.00</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">23/02/2024</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium gap-4">
                                      <Select>
                                          <SelectTrigger className="w-[180px]">
                                              <SelectValue placeholder="Pending" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="paid">Paid</SelectItem>
                                              <SelectItem value="Unpaid">Unpaid</SelectItem>
                                              <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                      </Select>
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
                                  <div className="font-medium">Sakuja Shamal</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium">LKR 2900.00</div>
                              </TableCell>

                              <TableCell>
                                  <div className="font-medium">23/02/2024</div>
                              </TableCell>
                              <TableCell>
                                  <div className="font-medium gap-4">
                                      <Select>
                                          <SelectTrigger className="w-[180px]">
                                              <SelectValue placeholder="Pending" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="paid">Paid</SelectItem>
                                              <SelectItem value="Unpaid">Unpaid</SelectItem>
                                              <SelectItem value="Pending">Pending</SelectItem>
                                          </SelectContent>
                                      </Select>
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

export default ManageMemberPayments