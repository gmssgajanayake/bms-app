'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function AdminManage() {

    let placeholder='Yes';

    return (
        <div className={'grid gap-6 bg'}>
            <div className={' grid grid-cols-1 items-center  text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
                    <div
                        className="mx-auto grid grid-cols-1  items-center gap-6">
                        <h1 className={'font-bold text-[25px] lg:text-[30px] uppercase'}>
                           Change Your Admin Status With Another Member
                        </h1>
                        <Select onValueChange={(value) => console.log(value)}>
                            <SelectTrigger className="w-[200px] lg:w-[280px]">
                                <SelectValue placeholder={placeholder}/>
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
        </div>
    )
}

export default AdminManage