'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";

function AdminManage({members,adminId}) {
    const router = useRouter();
    let adminMemberId;

    members.find((member) => {
        if(member?.systemUser?.clerkId === adminId) adminMemberId=member?.id
    })


    async function changeAdminStatus(adminId,memberId) {
        await GlobalApi.changeAdmin(memberId,true).then(async resp => {
            await GlobalApi.changeAdmin(adminId, false).then(resp => {
                router.push('/member/dashboard');
                router.refresh();
            }).catch(error => {
                console.log(error.message)
            })
        }).catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className={'grid gap-6 bg'}>
            <div className={' grid grid-cols-1 items-center  text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
                    <div
                        className="mx-auto grid grid-cols-1  items-center gap-6">
                        <h1 className={'font-bold text-[25px] lg:text-[30px] uppercase'}>
                           Change Your Admin Status With Another Member
                        </h1>
                        <Select onValueChange={(value) => changeAdminStatus(adminMemberId,value)}>
                            <SelectTrigger className="w-[200px] lg:w-[280px]">
                                <SelectValue placeholder={"Select User ID"}/>
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    members.map((member) => (
                                        member?.systemUser?.clerkId!==adminId &&  <SelectItem  value={member?.id}>{member?.systemUser?.clerkId}</SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminManage