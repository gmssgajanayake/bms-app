'use client'
import React from 'react'
import {Button} from "@/components/ui/button";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";

function ManageBudget({balance,openedDate,total,budgetId,statusOfBudget,boardingId}) {

    const router = useRouter();

    async function createBudget() {
        await GlobalApi.createNewBudget(boardingId,balance).then(resp => {
            router.refresh();
        }).catch(error => {
            console.log(error.message)
        })
    }

    async function closeBudget() {
        await GlobalApi.closeBudget(budgetId).then(resp => {
            router.refresh();
        }).catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className={'grid gap-6'}>
            <div className={' grid grid-cols-1 text-gray-800  '}>
                <div className={'bg-gray-100 p-10  flex flex-col gap-2 rounded-xl '}>
                    <h1 className={'font-bold text-[25px] lg:text-[30px] '}>Manage Budgets</h1>
                    <div className={'grid grid-cols-1 gap-6'}>
                        <h2>Last Budget Details : </h2>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
                            <div className={'w-[200px] p-1 h-40  flex flex-col justify-center gap-4'}>
                                <h4 className={'font-normal italic'}><span
                                    className={'font-bold'}>Budget ID :</span> <br/>{budgetId}</h4>
                                <hr/>
                                <h4 className={'font-normal italic'}><span
                                    className={'font-bold'}>Total Funded Amount :</span>
                                    <br/> {total}</h4>
                            </div>
                            <div className={'w-[200px] p-1 h-40  flex flex-col justify-center gap-4'}>
                                <h4 className={'font-normal italic'}><span
                                    className={'font-bold'}>Opened Date :</span> <br/>{openedDate}
                                </h4>
                                <hr/>
                                <h4 className={'font-normal italic'}><span
                                    className={'font-bold'}>Balance Amount :</span>
                                    <br/> {balance}
                                </h4>
                            </div>
                            <div></div>
                            {
                                statusOfBudget ?  <Button onClick={closeBudget} className={'bg-red-500 hover:bg-red-500'}>Close budget</Button> :  <Button onClick={createBudget} >Create new budget</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBudget