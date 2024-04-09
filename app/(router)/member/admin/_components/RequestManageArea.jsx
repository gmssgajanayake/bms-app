import React from 'react'
import {Badge} from "@/components/ui/badge";
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
import { Slash } from 'lucide-react';
import {Button} from "@/components/ui/button";
function RequestManageArea() {
  return (
      <div className={'grid gap-6'}>
        <div className={' grid grid-cols-1 items-center  text-gray-800  '}>
          <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
            <div
                className="mx-auto grid grid-cols-1  items-center gap-6">
              <h1 className={'font-bold text-[25px] lg:text-[30px] uppercase'}>
                Is available to join ?
              </h1>
              <Select>
                <SelectTrigger className="w-[200px] lg:w-[280px]">
                  <SelectValue placeholder="Yes, Anyone can request to join" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className={'bg-indigo-100'} value="Yes">Yes, Anyone can request to join</SelectItem>
                    <SelectItem className={'bg-red-100'}  value="No">No, No one can request to join</SelectItem>
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
                      Name of User
                    </TableHead>
                    <TableHead>
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className={' items-center'}>
                      <div className="font-medium">8uy4398uihdu3ir</div>
                    </TableCell>
                    <TableCell >
                      <div className="font-medium">G.M.Sakuja Shamal</div>
                    </TableCell>
                    <TableCell>
                     <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 items-center justify-center '}>
                       <Button className={'pl-8 pr-8'}>Accept</Button>
                       <Button className={'pl-8 pr-8'}>Reject</Button>
                     </div>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell className={' items-center'}>
                      <div className="font-medium">8uy4398uihdu3ir</div>
                    </TableCell>
                    <TableCell >
                      <div className="font-medium">G.M.Sakuja Shamal</div>
                    </TableCell>
                    <TableCell>
                      <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 items-center justify-center '}>
                        <Button className={'pl-8 pr-8'}>Accept</Button>
                        <Button className={'pl-8 pr-8'}>Reject</Button>
                      </div>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell className={' items-center'}>
                      <div className="font-medium">8uy4398uihdu3ir</div>
                    </TableCell>
                    <TableCell >
                      <div className="font-medium">G.M.Sakuja Shamal</div>
                    </TableCell>
                    <TableCell>
                      <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 items-center justify-center '}>
                        <Button className={'pl-8 pr-8'}>Accept</Button>
                        <Button className={'pl-8 pr-8'}>Reject</Button>
                      </div>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell className={' items-center'}>
                      <div className="font-medium">8uy4398uihdu3ir</div>
                    </TableCell>
                    <TableCell >
                      <div className="font-medium">G.M.Sakuja Shamal</div>
                    </TableCell>
                    <TableCell>
                      <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 items-center justify-center '}>
                        <Button className={'pl-8 pr-8'}>Accept</Button>
                        <Button className={'pl-8 pr-8'}>Reject</Button>
                      </div>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell className={' items-center'}>
                      <div className="font-medium">8uy4398uihdu3ir</div>
                    </TableCell>
                    <TableCell >
                      <div className="font-medium">G.M.Sakuja Shamal</div>
                    </TableCell>
                    <TableCell>
                      <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 items-center justify-center '}>
                        <Button className={'pl-8 pr-8'}>Accept</Button>
                        <Button className={'pl-8 pr-8'}>Reject</Button>
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

export default RequestManageArea