import React from 'react'
import {Button} from "@/components/ui/button";

function ManageBudget() {
    return (
        <div className={'grid gap-6'}>
            <div className={' grid grid-cols-1 text-gray-800  '}>
                <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
                    <h1 className={'font-bold text-[25px] lg:text-[30px] '}>Manage Budgets</h1>
                    <div className={'grid grid-cols-1 gap-6'}>
                        <h2>Last Budget Details : </h2>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>

                            <div className={'w-[200px] p-1 h-40  flex flex-col justify-center gap-4'}>
                                <h4 className={'font-normal italic'}><span className={'font-bold'}>Budget ID :</span> <br/> icj3894jf394fh34</h4>
                                <hr/>
                                <h4 className={'font-normal italic'}><span className={'font-bold'}>Total Funded Amount :</span> <br/> LKR 98340.00</h4>
                            </div>
                            <div className={'w-[200px] p-1 h-40  flex flex-col justify-center gap-4'}>
                                <h4 className={'font-normal italic'}><span className={'font-bold'}>Opened Date :</span> <br/> 2023-01-01
                                </h4>
                                <hr/>
                                <h4 className={'font-normal italic'}><span className={'font-bold'}>Balance Amount :</span> <br/> LKR 98340.00
                                </h4>
                            </div>
                            <Button>Create new budget</Button>
                            <Button>Close budget</Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ManageBudget