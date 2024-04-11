import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import {Button} from "@/components/ui/button";
import BudgetContent from "@/app/(router)/member/budgets/_components/BudgetContent";


export const metadata = {
    title: "BMS | Budgets - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let isMember;
    let isAdmin;
    let boardingId;
    let dataSet;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember = resp?.systemUser?.member != null;
        isAdmin = resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })

    await GlobalApi.getBoardingByClerkId(userData?.id).then(resp => {
        boardingId = resp?.systemUser?.member?.boarding?.id
    }).catch(error => {
        console.log(error)
    })

    await GlobalApi.allBudgetDetails(boardingId).then(resp => {
        dataSet = resp?.boarding?.budgets
    }).catch(error => {
        console.log(error)
    })


    return (
        <div className={'flex flex-col gap-6 bg-muted/40 '}>
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'budgets'}/>
            {
                dataSet.map(budget=>{
                    return(
                        budget?.closedDate!==null?
                        <div
                            className="flex bg-white mb-10  flex-col flex-1 items-center ml-6 mr-6 lg:pt-10 p-4 justify-center rounded-lg border border-dashed shadow-sm">
                            <BudgetContent budget={budget}/>
                        </div>:null
                    )
                })
            }
        </div>
    )
}

export default page