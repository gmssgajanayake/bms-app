import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import DashboardContent from "@/app/(router)/member/dashboard/_components/DashboardContent";

export const metadata = {
    title: "BMS | Dashboard - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let isMember;
    let isAdmin;
    let name;
    let memberId;

    let balance = 0;
    let total = 0;
    let lastBudget = 0;
    let openedDate = '';
    let closedDate = '';

    let lastPayments;
    let lastBudgetSpends=[];

    let boardingId;
    let preBudgetId ;
    let budgetId ;


    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember = resp?.systemUser?.member != null;
        isAdmin = resp?.systemUser?.member?.adminStatus;
        name = resp?.systemUser?.firstName + " " + resp?.systemUser?.lastName;
        memberId = userData?.id;
    }).catch(error => {
        console.log(error)
    })

    await GlobalApi.getBoardingByClerkId(userData?.id).then(resp => {
        boardingId = resp?.systemUser?.member?.boarding?.id
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.getAllBudgets(boardingId).then(resp => {
        if (resp?.boarding?.budgets.length > 0) {
            budgetId = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 1].id
            balance = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 1].balance
            total = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 1].total
            openedDate = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 1].openedDate
        }
        if (resp?.boarding?.budgets.length > 1) {
            closedDate = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 2].closedDate
            preBudgetId = resp?.boarding?.budgets[resp?.boarding?.budgets.length - 2].id
        }
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.getLastBudgetSpends(preBudgetId).then((resp)=> {
        if(resp?.budget!==null){
            resp?.budget?.spendForBudgets?.map((item)=>{
                lastBudget += item.price
            })
        }
        }
    ).catch(error=>{
        console.log(error)
    })


    await GlobalApi.getLastBudgetSpends(budgetId).then((resp)=> {
        lastBudgetSpends=resp?.budget?.spendForBudgets
    }).catch(error=>{
        console.log(error)
    })


    return (
        <div>
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'dashboard'}/>
            <DashboardContent total={total} balance={balance} lastBudget={lastBudget}
                              openedDate={openedDate} closedDate={closedDate} isAdmin={isAdmin}
                              name={name} memberId={memberId} imageUrl={userData?.imageUrl}
                              lastBudgetSpends={lastBudgetSpends}
            />
        </div>
    )
}

export default page